/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RequestCapabilitiesGlobals = {
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

export type RequestCapabilitiesRequest = {
  accountID: string;
  addCapabilities: components.AddCapabilities;
};

export type RequestCapabilitiesResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.Capability>;
};

/** @internal */
export const RequestCapabilitiesGlobals$inboundSchema: z.ZodType<
  RequestCapabilitiesGlobals,
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
export type RequestCapabilitiesGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const RequestCapabilitiesGlobals$outboundSchema: z.ZodType<
  RequestCapabilitiesGlobals$Outbound,
  z.ZodTypeDef,
  RequestCapabilitiesGlobals
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
export namespace RequestCapabilitiesGlobals$ {
  /** @deprecated use `RequestCapabilitiesGlobals$inboundSchema` instead. */
  export const inboundSchema = RequestCapabilitiesGlobals$inboundSchema;
  /** @deprecated use `RequestCapabilitiesGlobals$outboundSchema` instead. */
  export const outboundSchema = RequestCapabilitiesGlobals$outboundSchema;
  /** @deprecated use `RequestCapabilitiesGlobals$Outbound` instead. */
  export type Outbound = RequestCapabilitiesGlobals$Outbound;
}

export function requestCapabilitiesGlobalsToJSON(
  requestCapabilitiesGlobals: RequestCapabilitiesGlobals,
): string {
  return JSON.stringify(
    RequestCapabilitiesGlobals$outboundSchema.parse(requestCapabilitiesGlobals),
  );
}

export function requestCapabilitiesGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<RequestCapabilitiesGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestCapabilitiesGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestCapabilitiesGlobals' from JSON`,
  );
}

/** @internal */
export const RequestCapabilitiesRequest$inboundSchema: z.ZodType<
  RequestCapabilitiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  AddCapabilities: components.AddCapabilities$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "AddCapabilities": "addCapabilities",
  });
});

/** @internal */
export type RequestCapabilitiesRequest$Outbound = {
  accountID: string;
  AddCapabilities: components.AddCapabilities$Outbound;
};

/** @internal */
export const RequestCapabilitiesRequest$outboundSchema: z.ZodType<
  RequestCapabilitiesRequest$Outbound,
  z.ZodTypeDef,
  RequestCapabilitiesRequest
> = z.object({
  accountID: z.string(),
  addCapabilities: components.AddCapabilities$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    addCapabilities: "AddCapabilities",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestCapabilitiesRequest$ {
  /** @deprecated use `RequestCapabilitiesRequest$inboundSchema` instead. */
  export const inboundSchema = RequestCapabilitiesRequest$inboundSchema;
  /** @deprecated use `RequestCapabilitiesRequest$outboundSchema` instead. */
  export const outboundSchema = RequestCapabilitiesRequest$outboundSchema;
  /** @deprecated use `RequestCapabilitiesRequest$Outbound` instead. */
  export type Outbound = RequestCapabilitiesRequest$Outbound;
}

export function requestCapabilitiesRequestToJSON(
  requestCapabilitiesRequest: RequestCapabilitiesRequest,
): string {
  return JSON.stringify(
    RequestCapabilitiesRequest$outboundSchema.parse(requestCapabilitiesRequest),
  );
}

export function requestCapabilitiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<RequestCapabilitiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestCapabilitiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestCapabilitiesRequest' from JSON`,
  );
}

/** @internal */
export const RequestCapabilitiesResponse$inboundSchema: z.ZodType<
  RequestCapabilitiesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.Capability$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type RequestCapabilitiesResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.Capability$Outbound>;
};

/** @internal */
export const RequestCapabilitiesResponse$outboundSchema: z.ZodType<
  RequestCapabilitiesResponse$Outbound,
  z.ZodTypeDef,
  RequestCapabilitiesResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.Capability$outboundSchema),
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
export namespace RequestCapabilitiesResponse$ {
  /** @deprecated use `RequestCapabilitiesResponse$inboundSchema` instead. */
  export const inboundSchema = RequestCapabilitiesResponse$inboundSchema;
  /** @deprecated use `RequestCapabilitiesResponse$outboundSchema` instead. */
  export const outboundSchema = RequestCapabilitiesResponse$outboundSchema;
  /** @deprecated use `RequestCapabilitiesResponse$Outbound` instead. */
  export type Outbound = RequestCapabilitiesResponse$Outbound;
}

export function requestCapabilitiesResponseToJSON(
  requestCapabilitiesResponse: RequestCapabilitiesResponse,
): string {
  return JSON.stringify(
    RequestCapabilitiesResponse$outboundSchema.parse(
      requestCapabilitiesResponse,
    ),
  );
}

export function requestCapabilitiesResponseFromJSON(
  jsonString: string,
): SafeParseResult<RequestCapabilitiesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestCapabilitiesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestCapabilitiesResponse' from JSON`,
  );
}
