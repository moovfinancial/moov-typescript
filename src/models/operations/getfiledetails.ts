/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetFileDetailsGlobals = {
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

export type GetFileDetailsRequest = {
  accountID: string;
  fileID: string;
};

export type GetFileDetailsResponse = {
  headers: { [k: string]: Array<string> };
  result: components.FileDetails;
};

/** @internal */
export const GetFileDetailsGlobals$inboundSchema: z.ZodType<
  GetFileDetailsGlobals,
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
export type GetFileDetailsGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const GetFileDetailsGlobals$outboundSchema: z.ZodType<
  GetFileDetailsGlobals$Outbound,
  z.ZodTypeDef,
  GetFileDetailsGlobals
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
export namespace GetFileDetailsGlobals$ {
  /** @deprecated use `GetFileDetailsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetFileDetailsGlobals$inboundSchema;
  /** @deprecated use `GetFileDetailsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetFileDetailsGlobals$outboundSchema;
  /** @deprecated use `GetFileDetailsGlobals$Outbound` instead. */
  export type Outbound = GetFileDetailsGlobals$Outbound;
}

export function getFileDetailsGlobalsToJSON(
  getFileDetailsGlobals: GetFileDetailsGlobals,
): string {
  return JSON.stringify(
    GetFileDetailsGlobals$outboundSchema.parse(getFileDetailsGlobals),
  );
}

export function getFileDetailsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetFileDetailsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFileDetailsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFileDetailsGlobals' from JSON`,
  );
}

/** @internal */
export const GetFileDetailsRequest$inboundSchema: z.ZodType<
  GetFileDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  fileID: z.string(),
});

/** @internal */
export type GetFileDetailsRequest$Outbound = {
  accountID: string;
  fileID: string;
};

/** @internal */
export const GetFileDetailsRequest$outboundSchema: z.ZodType<
  GetFileDetailsRequest$Outbound,
  z.ZodTypeDef,
  GetFileDetailsRequest
> = z.object({
  accountID: z.string(),
  fileID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFileDetailsRequest$ {
  /** @deprecated use `GetFileDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = GetFileDetailsRequest$inboundSchema;
  /** @deprecated use `GetFileDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = GetFileDetailsRequest$outboundSchema;
  /** @deprecated use `GetFileDetailsRequest$Outbound` instead. */
  export type Outbound = GetFileDetailsRequest$Outbound;
}

export function getFileDetailsRequestToJSON(
  getFileDetailsRequest: GetFileDetailsRequest,
): string {
  return JSON.stringify(
    GetFileDetailsRequest$outboundSchema.parse(getFileDetailsRequest),
  );
}

export function getFileDetailsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetFileDetailsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFileDetailsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFileDetailsRequest' from JSON`,
  );
}

/** @internal */
export const GetFileDetailsResponse$inboundSchema: z.ZodType<
  GetFileDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.FileDetails$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetFileDetailsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.FileDetails$Outbound;
};

/** @internal */
export const GetFileDetailsResponse$outboundSchema: z.ZodType<
  GetFileDetailsResponse$Outbound,
  z.ZodTypeDef,
  GetFileDetailsResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.FileDetails$outboundSchema,
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
export namespace GetFileDetailsResponse$ {
  /** @deprecated use `GetFileDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = GetFileDetailsResponse$inboundSchema;
  /** @deprecated use `GetFileDetailsResponse$outboundSchema` instead. */
  export const outboundSchema = GetFileDetailsResponse$outboundSchema;
  /** @deprecated use `GetFileDetailsResponse$Outbound` instead. */
  export type Outbound = GetFileDetailsResponse$Outbound;
}

export function getFileDetailsResponseToJSON(
  getFileDetailsResponse: GetFileDetailsResponse,
): string {
  return JSON.stringify(
    GetFileDetailsResponse$outboundSchema.parse(getFileDetailsResponse),
  );
}

export function getFileDetailsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetFileDetailsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFileDetailsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFileDetailsResponse' from JSON`,
  );
}
