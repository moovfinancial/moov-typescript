import { describe, expect, test } from "bun:test";
import { HTTPClient, Moov } from "@moovio/sdk";

/**
 * Builds a Moov SDK instance whose HTTPClient captures every outgoing
 * Request without hitting the network. The captured Request can then be
 * inspected for headers, URL, etc.
 */
function captureRequests(opts: ConstructorParameters<typeof Moov>[0]) {
  const requests: Request[] = [];
  const httpClient = new HTTPClient({
    fetcher: async (input, init) => {
      const req = input instanceof Request ? input : new Request(input, init);
      requests.push(req.clone());
      return new Response(null, { status: 200 });
    },
  });

  const moov = new Moov({ ...opts, httpClient });
  return { moov, requests };
}

describe("accessToken option", () => {
  test("sets Authorization: Bearer header on outgoing requests", async () => {
    const { moov, requests } = captureRequests({
      accessToken: "test-access-token-123",
    });

    await moov.ping.ping();

    expect(requests.length).toBe(1);
    expect(requests[0].headers.get("Authorization")).toBe(
      "Bearer test-access-token-123",
    );
  });

  test("applies bearer auth on every request, not just the first", async () => {
    const { moov, requests } = captureRequests({
      accessToken: "another-token",
    });

    await moov.ping.ping();
    await moov.ping.ping();
    await moov.ping.ping();

    expect(requests.length).toBe(3);
    for (const req of requests) {
      expect(req.headers.get("Authorization")).toBe("Bearer another-token");
    }
  });

  test("HTTP Basic auth still works when accessToken is not set", async () => {
    const { moov, requests } = captureRequests({
      security: { username: "my-public-key", password: "my-secret-key" },
    });

    await moov.ping.ping();

    expect(requests.length).toBe(1);
    const auth = requests[0].headers.get("Authorization");
    expect(auth).toMatch(/^Basic /);

    // Decode the base64 portion and confirm the credentials round-trip.
    const encoded = auth!.slice("Basic ".length);
    const decoded = Buffer.from(encoded, "base64").toString("utf8");
    expect(decoded).toBe("my-public-key:my-secret-key");
  });

  test("no Authorization header is sent when neither auth mode is configured", async () => {
    const { moov, requests } = captureRequests({});

    await moov.ping.ping();

    expect(requests.length).toBe(1);
    expect(requests[0].headers.get("Authorization")).toBeNull();
  });

  test("throws at construction when both accessToken and Basic creds are set", () => {
    expect(() =>
      new Moov({
        accessToken: "some-token",
        security: { username: "u", password: "p" },
      })
    ).toThrow(/cannot both be set/i);
  });
});
