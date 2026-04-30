import { SDKOptions } from "../lib/config.js";
import { SDKInitHook } from "./types.js";

const gt: unknown = typeof globalThis === "undefined" ? null : globalThis;
const webWorkerLike = typeof gt === "object"
  && gt != null
  && "importScripts" in gt
  && typeof gt["importScripts"] === "function";
const isBrowserLike = webWorkerLike
  || (typeof navigator !== "undefined" && "serviceWorker" in navigator)
  || (typeof window === "object" && typeof window.document !== "undefined");

type SecurityObject = {
  username?: string | undefined;
  password?: string | undefined;
  accessToken?: string | undefined;
};

function asSecurity(security: SDKOptions["security"]): SecurityObject | null {
  if (security == null || typeof security === "function") {
    return null;
  }
  return security as SecurityObject;
}

function hasBasicCredentials(security: SecurityObject | null): boolean {
  return security != null
    && (security.username != null || security.password != null);
}

function hasAccessToken(security: SecurityObject | null): boolean {
  return security != null
    && typeof security.accessToken === "string"
    && security.accessToken.length > 0;
}

/**
 * Validates auth-related SDK options at construction time.
 *
 * The bearer-token header itself is set by Speakeasy's generated security
 * pipeline (see the `accessToken` scheme in `.speakeasy/overlays/access-token.yaml`
 * and `applyBearer` in `src/lib/security.ts`). This hook only enforces
 * client-side safety rules that the spec can't express:
 *
 *   - HTTP Basic credentials (API keys) must never be used in a browser-like
 *     environment.
 *   - `accessToken` and `username`/`password` cannot both be supplied; the
 *     caller must pick one auth mode.
 */
export class AccessTokenHook implements SDKInitHook {
  sdkInit(opts: SDKOptions): SDKOptions {
    const security = asSecurity(opts.security);

    if (hasBasicCredentials(security) && hasAccessToken(security)) {
      throw new Error(
        "Moov SDK: `username`/`password` and `accessToken` cannot both be "
          + "set on `security`. Use `accessToken` for OAuth2 bearer auth "
          + "(typically client-side) or `username`/`password` for HTTP Basic "
          + "auth with API keys (server-side).",
      );
    }

    if (isBrowserLike && hasBasicCredentials(security)) {
      throw new Error(
        "Moov SDK: HTTP Basic credentials were provided in a browser-like "
          + "environment. API keys must never be embedded in client-side "
          + "code. Mint a short-lived OAuth2 access token on your server and "
          + "pass it via `security.accessToken` instead.",
      );
    }

    return opts;
  }
}
