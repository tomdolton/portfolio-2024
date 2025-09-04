import { NextResponse } from "next/server";
import { checkAndRecord } from "./rateLimit";
import fs from "fs";
import path from "path";

// CAPTCHA validation method
const validateCaptcha = async (token) => {
  const secret = process.env.CAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  const r = await fetch(url, { method: "POST" });
  const j = await r.json();
  return j.success === true;
};

// Send request to recaptcha API
export async function POST(request) {
  const body = await request.json();
  // basic rate-limiting by IP
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "local";
  const { limited, remaining, count } = checkAndRecord(ip);
  if (limited) {
    // append a spam log entry
    try {
      const logsDir = path.resolve(process.cwd(), "logs");
      if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);
      const entry = `${new Date().toISOString()}\t${ip}\tRATE_LIMIT_EXCEEDED\tcount=${count}\n`;
      fs.appendFileSync(path.join(logsDir, "spam.log"), entry);
    } catch (e) {
      // swallow logging errors
    }
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }
  // client sends token as "g-recaptcha-response"
  const token = body["g-recaptcha-response"] || body.gRecaptchaResponse;
  if (!token || !(await validateCaptcha(token))) {
    return NextResponse.json({ error: "ReCaptcha failed" }, { status: 400 });
  }

  // forward to Formspree
  const formspreeEndpoint =
    process.env.FORMSPREE_ENDPOINT ||
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (!formspreeEndpoint) {
    return NextResponse.json(
      { error: "Formspree endpoint not configured" },
      { status: 500 }
    );
  }

  const resp = await fetch(formspreeEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      email: body.email,
      fullName: body.fullName,
      message: body.message,
      "g-recaptcha-response": token,
    }),
  });

  const json = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    return NextResponse.json(
      { error: json?.error || "Forward failed" },
      { status: resp.status || 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
