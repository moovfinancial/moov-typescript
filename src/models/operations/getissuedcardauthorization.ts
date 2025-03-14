/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetIssuedCardAuthorizationGlobals = {
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

export type GetIssuedCardAuthorizationRequest = {
  /**
   * The Moov business account for which cards have been issued.
   */
  accountID: string;
  authorizationID: string;
};

export type GetIssuedCardAuthorizationResponse = {
  headers: { [k: string]: Array<string> };
  result: components.IssuedCardAuthorization;
};

/** @internal */
export const GetIssuedCardAuthorizationGlobals$inboundSchema: z.ZodType<
  GetIssuedCardAuthorizationGlobals,
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
export type GetIssuedCardAuthorizationGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const GetIssuedCardAuthorizationGlobals$outboundSchema: z.ZodType<
  GetIssuedCardAuthorizationGlobals$Outbound,
  z.ZodTypeDef,
  GetIssuedCardAuthorizationGlobals
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
export namespace GetIssuedCardAuthorizationGlobals$ {
  /** @deprecated use `GetIssuedCardAuthorizationGlobals$inboundSchema` instead. */
  export const inboundSchema = GetIssuedCardAuthorizationGlobals$inboundSchema;
  /** @deprecated use `GetIssuedCardAuthorizationGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetIssuedCardAuthorizationGlobals$outboundSchema;
  /** @deprecated use `GetIssuedCardAuthorizationGlobals$Outbound` instead. */
  export type Outbound = GetIssuedCardAuthorizationGlobals$Outbound;
}

export function getIssuedCardAuthorizationGlobalsToJSON(
  getIssuedCardAuthorizationGlobals: GetIssuedCardAuthorizationGlobals,
): string {
  return JSON.stringify(
    GetIssuedCardAuthorizationGlobals$outboundSchema.parse(
      getIssuedCardAuthorizationGlobals,
    ),
  );
}

export function getIssuedCardAuthorizationGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetIssuedCardAuthorizationGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIssuedCardAuthorizationGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIssuedCardAuthorizationGlobals' from JSON`,
  );
}

/** @internal */
export const GetIssuedCardAuthorizationRequest$inboundSchema: z.ZodType<
  GetIssuedCardAuthorizationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  authorizationID: z.string(),
});

/** @internal */
export type GetIssuedCardAuthorizationRequest$Outbound = {
  accountID: string;
  authorizationID: string;
};

/** @internal */
export const GetIssuedCardAuthorizationRequest$outboundSchema: z.ZodType<
  GetIssuedCardAuthorizationRequest$Outbound,
  z.ZodTypeDef,
  GetIssuedCardAuthorizationRequest
> = z.object({
  accountID: z.string(),
  authorizationID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIssuedCardAuthorizationRequest$ {
  /** @deprecated use `GetIssuedCardAuthorizationRequest$inboundSchema` instead. */
  export const inboundSchema = GetIssuedCardAuthorizationRequest$inboundSchema;
  /** @deprecated use `GetIssuedCardAuthorizationRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetIssuedCardAuthorizationRequest$outboundSchema;
  /** @deprecated use `GetIssuedCardAuthorizationRequest$Outbound` instead. */
  export type Outbound = GetIssuedCardAuthorizationRequest$Outbound;
}

export function getIssuedCardAuthorizationRequestToJSON(
  getIssuedCardAuthorizationRequest: GetIssuedCardAuthorizationRequest,
): string {
  return JSON.stringify(
    GetIssuedCardAuthorizationRequest$outboundSchema.parse(
      getIssuedCardAuthorizationRequest,
    ),
  );
}

export function getIssuedCardAuthorizationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetIssuedCardAuthorizationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIssuedCardAuthorizationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIssuedCardAuthorizationRequest' from JSON`,
  );
}

/** @internal */
export const GetIssuedCardAuthorizationResponse$inboundSchema: z.ZodType<
  GetIssuedCardAuthorizationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.IssuedCardAuthorization$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetIssuedCardAuthorizationResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.IssuedCardAuthorization$Outbound;
};

/** @internal */
export const GetIssuedCardAuthorizationResponse$outboundSchema: z.ZodType<
  GetIssuedCardAuthorizationResponse$Outbound,
  z.ZodTypeDef,
  GetIssuedCardAuthorizationResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.IssuedCardAuthorization$outboundSchema,
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
export namespace GetIssuedCardAuthorizationResponse$ {
  /** @deprecated use `GetIssuedCardAuthorizationResponse$inboundSchema` instead. */
  export const inboundSchema = GetIssuedCardAuthorizationResponse$inboundSchema;
  /** @deprecated use `GetIssuedCardAuthorizationResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetIssuedCardAuthorizationResponse$outboundSchema;
  /** @deprecated use `GetIssuedCardAuthorizationResponse$Outbound` instead. */
  export type Outbound = GetIssuedCardAuthorizationResponse$Outbound;
}

export function getIssuedCardAuthorizationResponseToJSON(
  getIssuedCardAuthorizationResponse: GetIssuedCardAuthorizationResponse,
): string {
  return JSON.stringify(
    GetIssuedCardAuthorizationResponse$outboundSchema.parse(
      getIssuedCardAuthorizationResponse,
    ),
  );
}

export function getIssuedCardAuthorizationResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetIssuedCardAuthorizationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetIssuedCardAuthorizationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIssuedCardAuthorizationResponse' from JSON`,
  );
}
