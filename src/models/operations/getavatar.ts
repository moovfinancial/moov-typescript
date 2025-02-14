/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAvatarGlobals = {
  /**
   * Specify an API version.
   *
   * @remarks
   *
   * API versioning follows the format `vYYYY.QQ.BB`, where
   *   - `YYYY` is the year
   *   - `QQ` is the two-digit month for the first month of the quarter (e.g., 01, 04, 07, 10)
   *   - `BB` is the build number, starting at `.01`, for subsequent builds in the same quarter.
   *     - For example, `v2024.01.00` is the initial release of the first quarter of 2024.
   *
   * The `latest` version represents the most recent development state. It may include breaking changes and should be treated as a beta release.
   */
  xMoovVersion?: string | undefined;
};

export type GetAvatarRequest = {
  /**
   * Any unique ID associated with an account such as accountID, representativeID, routing number, or userID.
   */
  uniqueID: string;
};

export type GetAvatarResponse = {
  headers: { [k: string]: Array<string> };
  result: ReadableStream<Uint8Array>;
};

/** @internal */
export const GetAvatarGlobals$inboundSchema: z.ZodType<
  GetAvatarGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": z.string().default("v2024.01.00"),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type GetAvatarGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const GetAvatarGlobals$outboundSchema: z.ZodType<
  GetAvatarGlobals$Outbound,
  z.ZodTypeDef,
  GetAvatarGlobals
> = z.object({
  xMoovVersion: z.string().default("v2024.01.00"),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvatarGlobals$ {
  /** @deprecated use `GetAvatarGlobals$inboundSchema` instead. */
  export const inboundSchema = GetAvatarGlobals$inboundSchema;
  /** @deprecated use `GetAvatarGlobals$outboundSchema` instead. */
  export const outboundSchema = GetAvatarGlobals$outboundSchema;
  /** @deprecated use `GetAvatarGlobals$Outbound` instead. */
  export type Outbound = GetAvatarGlobals$Outbound;
}

export function getAvatarGlobalsToJSON(
  getAvatarGlobals: GetAvatarGlobals,
): string {
  return JSON.stringify(
    GetAvatarGlobals$outboundSchema.parse(getAvatarGlobals),
  );
}

export function getAvatarGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetAvatarGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvatarGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvatarGlobals' from JSON`,
  );
}

/** @internal */
export const GetAvatarRequest$inboundSchema: z.ZodType<
  GetAvatarRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uniqueID: z.string(),
});

/** @internal */
export type GetAvatarRequest$Outbound = {
  uniqueID: string;
};

/** @internal */
export const GetAvatarRequest$outboundSchema: z.ZodType<
  GetAvatarRequest$Outbound,
  z.ZodTypeDef,
  GetAvatarRequest
> = z.object({
  uniqueID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvatarRequest$ {
  /** @deprecated use `GetAvatarRequest$inboundSchema` instead. */
  export const inboundSchema = GetAvatarRequest$inboundSchema;
  /** @deprecated use `GetAvatarRequest$outboundSchema` instead. */
  export const outboundSchema = GetAvatarRequest$outboundSchema;
  /** @deprecated use `GetAvatarRequest$Outbound` instead. */
  export type Outbound = GetAvatarRequest$Outbound;
}

export function getAvatarRequestToJSON(
  getAvatarRequest: GetAvatarRequest,
): string {
  return JSON.stringify(
    GetAvatarRequest$outboundSchema.parse(getAvatarRequest),
  );
}

export function getAvatarRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAvatarRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvatarRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvatarRequest' from JSON`,
  );
}

/** @internal */
export const GetAvatarResponse$inboundSchema: z.ZodType<
  GetAvatarResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.instanceof(ReadableStream<Uint8Array>),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetAvatarResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: ReadableStream<Uint8Array>;
};

/** @internal */
export const GetAvatarResponse$outboundSchema: z.ZodType<
  GetAvatarResponse$Outbound,
  z.ZodTypeDef,
  GetAvatarResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.instanceof(ReadableStream<Uint8Array>),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvatarResponse$ {
  /** @deprecated use `GetAvatarResponse$inboundSchema` instead. */
  export const inboundSchema = GetAvatarResponse$inboundSchema;
  /** @deprecated use `GetAvatarResponse$outboundSchema` instead. */
  export const outboundSchema = GetAvatarResponse$outboundSchema;
  /** @deprecated use `GetAvatarResponse$Outbound` instead. */
  export type Outbound = GetAvatarResponse$Outbound;
}

export function getAvatarResponseToJSON(
  getAvatarResponse: GetAvatarResponse,
): string {
  return JSON.stringify(
    GetAvatarResponse$outboundSchema.parse(getAvatarResponse),
  );
}

export function getAvatarResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAvatarResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvatarResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvatarResponse' from JSON`,
  );
}
