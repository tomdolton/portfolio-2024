import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// CAPTCHA validation method
const validateCaptcha = (response_key) => {
  return new Promise((resolve, reject) => {
    const secret_key = process.env.CAPTCHA_SECRET_KEY;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;
    console.log(url);

    fetch(url, {
      method: "post",
    })
      .then((response) => response.json())
      .then((google_response) => {
        if (google_response.success == true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        resolve(false);
      });
  });
};

// Send request to SendGrid API
export async function POST(request) {
  const body = await request.json();

  if (!(await validateCaptcha(body.gRecaptchaResponse))) {
    return NextResponse.json({ error: "ReCaptcha failed" }, { status: 500 });
  }

  try {
    await sgMail.send({
      to: process.env.CONTACT_FORM_MAIL_TO,
      from: process.env.CONTACT_FORM_MAIL_FROM, // Change to your verified sender
      subject: `Portfolio website contact form submission`,
      text: "Portfolio website contact form submission",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <title>Contact form submission</title>
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
              </head>
            
              <body>
                <div style="margin-left: 20px;margin-right: 20px;">
                  <h1 style="margin-bottom: 20px;">New contact form submission from tomdolton.com</h1>
                  <br>
                  <h2>Name: ${body.fullName}</h2>
                  <h2>Email: ${body.email}</h2>
                  <br>
                  <p>Message:</p>
                  <p>${body.message}</p>
                </div>
              </body>
            </html>`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }

  return NextResponse.json({ error: "" }, { status: 200 });
}
