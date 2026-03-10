import { SDK_METADATA } from "../lib/config.js";
import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

export class MoovVersionHook implements BeforeRequestHook {
  beforeRequest(
    _hookCtx: BeforeRequestContext,
    request: Request,
  ): Request {
    const newRequest = new Request(request);
    newRequest.headers.set("X-Moov-Version", SDK_METADATA.openapiDocVersion);
    return newRequest;
  }
}
