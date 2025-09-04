import { describe, it, expect, beforeEach } from "vitest";
import { checkAndRecord, _resetRateLimiter } from "../app/api/contact/rateLimit";

describe("rateLimit", () => {
  beforeEach(() => {
    _resetRateLimiter();
  });

  it("allows up to LIMIT requests and then limits", () => {
    const ip = "1.2.3.4";
    let res;
    // send LIMIT requests
    for (let i = 0; i < 5; i++) {
      res = checkAndRecord(ip);
      expect(res.limited).toBe(false);
    }
    // next request should be limited
    res = checkAndRecord(ip);
    expect(res.limited).toBe(true);
  });
});
