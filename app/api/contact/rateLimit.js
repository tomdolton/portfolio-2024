// Simple in-memory rate limiter for local/small deployments.
// Limits requests per IP to LIMIT within WINDOW_MS.
const LIMIT = 5;
const WINDOW_MS = 60 * 1000; // 1 minute

const store = new Map(); // ip -> [timestamps]

export function checkAndRecord(ip) {
  const now = Date.now();
  const arr = store.get(ip) || [];
  // Keep only timestamps within the window
  const recent = arr.filter((ts) => now - ts <= WINDOW_MS);
  recent.push(now);
  store.set(ip, recent);
  const limited = recent.length > LIMIT;
  return { limited, remaining: Math.max(0, LIMIT - recent.length), count: recent.length };
}

// Test helper to reset the in-memory store
export function _resetRateLimiter() {
  store.clear();
}
