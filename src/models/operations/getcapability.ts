/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCapabilityGlobals = {
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

export type GetCapabilityRequest = {
  accountID: string;
  /**
   * Moov account capabilities.
   *
   * @remarks
   *
   * The `production-app`, `platform.production-app`, and / or `platform.wallet-transfers` capabilities might appear in your list. These are read-only capabilities that Moov requests and uses for account verification purposes. These capabilities remains active with your account and require no additional action.
   */
  capabilityID: components.CapabilityID;
};

export type GetCapabilityResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Capability;
};

/** @internal */
export const GetCapabilityGlobals$inboundSchema: z.ZodType<
  GetCapabilityGlobals,
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
export type GetCapabilityGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const GetCapabilityGlobals$outboundSchema: z.ZodType<
  GetCapabilityGlobals$Outbound,
  z.ZodTypeDef,
  GetCapabilityGlobals
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
export namespace GetCapabilityGlobals$ {
  /** @deprecated use `GetCapabilityGlobals$inboundSchema` instead. */
  export const inboundSchema = GetCapabilityGlobals$inboundSchema;
  /** @deprecated use `GetCapabilityGlobals$outboundSchema` instead. */
  export const outboundSchema = GetCapabilityGlobals$outboundSchema;
  /** @deprecated use `GetCapabilityGlobals$Outbound` instead. */
  export type Outbound = GetCapabilityGlobals$Outbound;
}

export function getCapabilityGlobalsToJSON(
  getCapabilityGlobals: GetCapabilityGlobals,
): string {
  return JSON.stringify(
    GetCapabilityGlobals$outboundSchema.parse(getCapabilityGlobals),
  );
}

export function getCapabilityGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetCapabilityGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCapabilityGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCapabilityGlobals' from JSON`,
  );
}

/** @internal */
export const GetCapabilityRequest$inboundSchema: z.ZodType<
  GetCapabilityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  capabilityID: components.CapabilityID$inboundSchema,
});

/** @internal */
export type GetCapabilityRequest$Outbound = {
  accountID: string;
  capabilityID: string;
};

/** @internal */
export const GetCapabilityRequest$outboundSchema: z.ZodType<
  GetCapabilityRequest$Outbound,
  z.ZodTypeDef,
  GetCapabilityRequest
> = z.object({
  accountID: z.string(),
  capabilityID: components.CapabilityID$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCapabilityRequest$ {
  /** @deprecated use `GetCapabilityRequest$inboundSchema` instead. */
  export const inboundSchema = GetCapabilityRequest$inboundSchema;
  /** @deprecated use `GetCapabilityRequest$outboundSchema` instead. */
  export const outboundSchema = GetCapabilityRequest$outboundSchema;
  /** @deprecated use `GetCapabilityRequest$Outbound` instead. */
  export type Outbound = GetCapabilityRequest$Outbound;
}

export function getCapabilityRequestToJSON(
  getCapabilityRequest: GetCapabilityRequest,
): string {
  return JSON.stringify(
    GetCapabilityRequest$outboundSchema.parse(getCapabilityRequest),
  );
}

export function getCapabilityRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCapabilityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCapabilityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCapabilityRequest' from JSON`,
  );
}

/** @internal */
export const GetCapabilityResponse$inboundSchema: z.ZodType<
  GetCapabilityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.Capability$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetCapabilityResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Capability$Outbound;
};

/** @internal */
export const GetCapabilityResponse$outboundSchema: z.ZodType<
  GetCapabilityResponse$Outbound,
  z.ZodTypeDef,
  GetCapabilityResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.Capability$outboundSchema,
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
export namespace GetCapabilityResponse$ {
  /** @deprecated use `GetCapabilityResponse$inboundSchema` instead. */
  export const inboundSchema = GetCapabilityResponse$inboundSchema;
  /** @deprecated use `GetCapabilityResponse$outboundSchema` instead. */
  export const outboundSchema = GetCapabilityResponse$outboundSchema;
  /** @deprecated use `GetCapabilityResponse$Outbound` instead. */
  export type Outbound = GetCapabilityResponse$Outbound;
}

export function getCapabilityResponseToJSON(
  getCapabilityResponse: GetCapabilityResponse,
): string {
  return JSON.stringify(
    GetCapabilityResponse$outboundSchema.parse(getCapabilityResponse),
  );
}

export function getCapabilityResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCapabilityResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCapabilityResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCapabilityResponse' from JSON`,
  );
}
