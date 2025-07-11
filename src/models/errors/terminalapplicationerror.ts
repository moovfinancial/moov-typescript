/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { MoovError } from "./mooverror.js";

export type TerminalApplicationErrorData = {
  platform?: string | undefined;
  appBundleID?: string | undefined;
  packageName?: string | undefined;
  sha256Digest?: string | undefined;
  versionCode?: string | undefined;
};

export class TerminalApplicationError extends MoovError {
  platform?: string | undefined;
  appBundleID?: string | undefined;
  packageName?: string | undefined;
  sha256Digest?: string | undefined;
  versionCode?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: TerminalApplicationErrorData;

  constructor(
    err: TerminalApplicationErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.platform != null) this.platform = err.platform;
    if (err.appBundleID != null) this.appBundleID = err.appBundleID;
    if (err.packageName != null) this.packageName = err.packageName;
    if (err.sha256Digest != null) this.sha256Digest = err.sha256Digest;
    if (err.versionCode != null) this.versionCode = err.versionCode;

    this.name = "TerminalApplicationError";
  }
}

/** @internal */
export const TerminalApplicationError$inboundSchema: z.ZodType<
  TerminalApplicationError,
  z.ZodTypeDef,
  unknown
> = z.object({
  platform: z.string().optional(),
  appBundleID: z.string().optional(),
  packageName: z.string().optional(),
  sha256Digest: z.string().optional(),
  versionCode: z.string().optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new TerminalApplicationError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type TerminalApplicationError$Outbound = {
  platform?: string | undefined;
  appBundleID?: string | undefined;
  packageName?: string | undefined;
  sha256Digest?: string | undefined;
  versionCode?: string | undefined;
};

/** @internal */
export const TerminalApplicationError$outboundSchema: z.ZodType<
  TerminalApplicationError$Outbound,
  z.ZodTypeDef,
  TerminalApplicationError
> = z.instanceof(TerminalApplicationError)
  .transform(v => v.data$)
  .pipe(z.object({
    platform: z.string().optional(),
    appBundleID: z.string().optional(),
    packageName: z.string().optional(),
    sha256Digest: z.string().optional(),
    versionCode: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TerminalApplicationError$ {
  /** @deprecated use `TerminalApplicationError$inboundSchema` instead. */
  export const inboundSchema = TerminalApplicationError$inboundSchema;
  /** @deprecated use `TerminalApplicationError$outboundSchema` instead. */
  export const outboundSchema = TerminalApplicationError$outboundSchema;
  /** @deprecated use `TerminalApplicationError$Outbound` instead. */
  export type Outbound = TerminalApplicationError$Outbound;
}
