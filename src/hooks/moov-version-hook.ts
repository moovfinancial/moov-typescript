import { SDK_METADATA, SDKOptions } from "../lib/config";
import { SDKInitHook } from "./types";

export class MoovVersionHook implements SDKInitHook {
  sdkInit(opts: SDKOptions): SDKOptions {
    opts.xMoovVersion = SDK_METADATA.openapiDocVersion;
    return opts;
  }
}
