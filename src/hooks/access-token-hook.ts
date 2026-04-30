import { SDKOptions } from "../lib/config.js";
import {
  BeforeRequestContext,
  BeforeRequestHook,
  SDKInitHook,
} from "./types.js";

const gt: unknown = typeof globalThis === "undefined" ? null : globalThis;
const webWorkerLike = typeof gt === "object"
  && gt != null
  && "importScripts" in gt
  && typeof gt["importScripts"] === "function";
const isBrowserLike = webWorkerLike
  || (typeof navigator !== "undefined" && "serviceWorker" in navigator)
  || (typeof window === "object" && typeof window.document !== "undefined");

/**
 * Applies bearer-token authentication and validates auth-related SDK
 * options at construction time.
 *
 * `accessToken` is exposed as a top-level SDK option via the
 * `x-speakeasy-globals` overlay in `.speakeasy/overlays/access-token.yaml`.
 * Speakeasy doesn't auto-send it (no operation declares a matching
 * parameter), so this hook is responsible for translating it into the
 * `Authorization: Bearer …` header.
 *
 * HTTP Basic credentials (`security.username` / `security.password`) are
 * still handled automatically by Speakeasy's generated security pipeline.
 *
 * Validation rules enforced at SDK init:
 *   - `accessToken` and `security.username`/`password` cannot both be set.
 *   - HTTP Basic credentials are rejected in browser-like environments.
 *     Browsers must use `accessToken` instead.
 */
export class AccessTokenHook implements SDKInitHook, BeforeRequestHook {
  sdkInit(opts: SDKOptions): SDKOptions {
    const token = opts.accessToken;
    const hasToken = typeof token === "string" && token.length > 0;

    if (hasToken && opts.security != null) {
      throw new Error(
        "Moov SDK: `accessToken` and `security.username`/`password` cannot "
          + "both be set. Use `accessToken` for OAuth2 bearer auth "
          + "(typically client-side) or `security.username`/`password` for "
          + "HTTP Basic auth with API keys (server-side).",
      );
    }

    if (isBrowserLike && opts.security != null) {
      throw new Error(
        "Moov SDK: HTTP Basic credentials were provided in a browser-like "
          + "environment. API keys must never be embedded in client-side "
          + "code. Mint a short-lived OAuth2 access token on your server "
          + "and pass it via the `accessToken` option instead.",
      );
    }

    return opts;
  }

  beforeRequest(ctx: BeforeRequestContext, request: Request): Request {
    const token = ctx.options.accessToken;

    // Bail early if there's no token or the request already has an Authorization header.
    if (!token || request.headers.has("Authorization")) {
      return request;
    }

    const next = new Request(request);
    next.headers.set("Authorization", `Bearer ${token}`);
    return next;
  }
}
