/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetEnrichmentAddressGlobals = {
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

export type GetEnrichmentAddressRequest = {
  /**
   * Partial or complete address to search.
   */
  search: string;
  /**
   * Maximum number of results to return.
   */
  maxResults?: number | undefined;
  /**
   * Limits results to a list of given cities.
   */
  includeCities?: string | undefined;
  /**
   * Limits results to a list of given states.
   */
  includeStates?: string | undefined;
  /**
   * Limits results to a list of given zipcodes.
   */
  includeZipcodes?: string | undefined;
  /**
   * Exclude list of states from results. No `include` pararmeters may be used with this parameter.
   */
  excludeStates?: string | undefined;
  /**
   * Display results with the listed cities at the top.
   */
  preferCities?: string | undefined;
  /**
   * Display results with the listed states at the top.
   */
  preferStates?: string | undefined;
  /**
   * Display results with the listed zipcodes at the top.
   */
  preferZipcodes?: string | undefined;
  /**
   * Specifies the percentage of address suggestions that should be preferred and will appear at the top of the results.
   */
  preferRatio?: number | undefined;
  /**
   *   If omitted or set to `city`, it uses the sender's IP address to determine location, then automatically adds the city and state
   *
   * @remarks
   *   to the preferCities value. This parameter takes precedence over other `include` or `exclude` parameters meaning that if it is
   *   not set to `none`, you may see addresses from areas you do not wish to see.
   */
  preferGeolocation?: string | undefined;
  /**
   * Useful for narrowing results with `addressLine2` suggestions such as `Apt` (denotes an apartment building with multiple residences).
   */
  selected?: string | undefined;
  /**
   * Include results from alternate data sources. Allowed values are `all` (non-postal addresses), or `postal` (postal addresses only).
   */
  source?: string | undefined;
};

export type GetEnrichmentAddressResponse = {
  headers: { [k: string]: Array<string> };
  result: components.EnrichedAddressResponse;
};

/** @internal */
export const GetEnrichmentAddressGlobals$inboundSchema: z.ZodType<
  GetEnrichmentAddressGlobals,
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
export type GetEnrichmentAddressGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const GetEnrichmentAddressGlobals$outboundSchema: z.ZodType<
  GetEnrichmentAddressGlobals$Outbound,
  z.ZodTypeDef,
  GetEnrichmentAddressGlobals
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
export namespace GetEnrichmentAddressGlobals$ {
  /** @deprecated use `GetEnrichmentAddressGlobals$inboundSchema` instead. */
  export const inboundSchema = GetEnrichmentAddressGlobals$inboundSchema;
  /** @deprecated use `GetEnrichmentAddressGlobals$outboundSchema` instead. */
  export const outboundSchema = GetEnrichmentAddressGlobals$outboundSchema;
  /** @deprecated use `GetEnrichmentAddressGlobals$Outbound` instead. */
  export type Outbound = GetEnrichmentAddressGlobals$Outbound;
}

export function getEnrichmentAddressGlobalsToJSON(
  getEnrichmentAddressGlobals: GetEnrichmentAddressGlobals,
): string {
  return JSON.stringify(
    GetEnrichmentAddressGlobals$outboundSchema.parse(
      getEnrichmentAddressGlobals,
    ),
  );
}

export function getEnrichmentAddressGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetEnrichmentAddressGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEnrichmentAddressGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEnrichmentAddressGlobals' from JSON`,
  );
}

/** @internal */
export const GetEnrichmentAddressRequest$inboundSchema: z.ZodType<
  GetEnrichmentAddressRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  search: z.string(),
  maxResults: z.number().int().optional(),
  includeCities: z.string().optional(),
  includeStates: z.string().optional(),
  includeZipcodes: z.string().optional(),
  excludeStates: z.string().optional(),
  preferCities: z.string().optional(),
  preferStates: z.string().optional(),
  preferZipcodes: z.string().optional(),
  preferRatio: z.number().int().optional(),
  preferGeolocation: z.string().optional(),
  selected: z.string().optional(),
  source: z.string().optional(),
});

/** @internal */
export type GetEnrichmentAddressRequest$Outbound = {
  search: string;
  maxResults?: number | undefined;
  includeCities?: string | undefined;
  includeStates?: string | undefined;
  includeZipcodes?: string | undefined;
  excludeStates?: string | undefined;
  preferCities?: string | undefined;
  preferStates?: string | undefined;
  preferZipcodes?: string | undefined;
  preferRatio?: number | undefined;
  preferGeolocation?: string | undefined;
  selected?: string | undefined;
  source?: string | undefined;
};

/** @internal */
export const GetEnrichmentAddressRequest$outboundSchema: z.ZodType<
  GetEnrichmentAddressRequest$Outbound,
  z.ZodTypeDef,
  GetEnrichmentAddressRequest
> = z.object({
  search: z.string(),
  maxResults: z.number().int().optional(),
  includeCities: z.string().optional(),
  includeStates: z.string().optional(),
  includeZipcodes: z.string().optional(),
  excludeStates: z.string().optional(),
  preferCities: z.string().optional(),
  preferStates: z.string().optional(),
  preferZipcodes: z.string().optional(),
  preferRatio: z.number().int().optional(),
  preferGeolocation: z.string().optional(),
  selected: z.string().optional(),
  source: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEnrichmentAddressRequest$ {
  /** @deprecated use `GetEnrichmentAddressRequest$inboundSchema` instead. */
  export const inboundSchema = GetEnrichmentAddressRequest$inboundSchema;
  /** @deprecated use `GetEnrichmentAddressRequest$outboundSchema` instead. */
  export const outboundSchema = GetEnrichmentAddressRequest$outboundSchema;
  /** @deprecated use `GetEnrichmentAddressRequest$Outbound` instead. */
  export type Outbound = GetEnrichmentAddressRequest$Outbound;
}

export function getEnrichmentAddressRequestToJSON(
  getEnrichmentAddressRequest: GetEnrichmentAddressRequest,
): string {
  return JSON.stringify(
    GetEnrichmentAddressRequest$outboundSchema.parse(
      getEnrichmentAddressRequest,
    ),
  );
}

export function getEnrichmentAddressRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetEnrichmentAddressRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEnrichmentAddressRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEnrichmentAddressRequest' from JSON`,
  );
}

/** @internal */
export const GetEnrichmentAddressResponse$inboundSchema: z.ZodType<
  GetEnrichmentAddressResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.EnrichedAddressResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetEnrichmentAddressResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.EnrichedAddressResponse$Outbound;
};

/** @internal */
export const GetEnrichmentAddressResponse$outboundSchema: z.ZodType<
  GetEnrichmentAddressResponse$Outbound,
  z.ZodTypeDef,
  GetEnrichmentAddressResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.EnrichedAddressResponse$outboundSchema,
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
export namespace GetEnrichmentAddressResponse$ {
  /** @deprecated use `GetEnrichmentAddressResponse$inboundSchema` instead. */
  export const inboundSchema = GetEnrichmentAddressResponse$inboundSchema;
  /** @deprecated use `GetEnrichmentAddressResponse$outboundSchema` instead. */
  export const outboundSchema = GetEnrichmentAddressResponse$outboundSchema;
  /** @deprecated use `GetEnrichmentAddressResponse$Outbound` instead. */
  export type Outbound = GetEnrichmentAddressResponse$Outbound;
}

export function getEnrichmentAddressResponseToJSON(
  getEnrichmentAddressResponse: GetEnrichmentAddressResponse,
): string {
  return JSON.stringify(
    GetEnrichmentAddressResponse$outboundSchema.parse(
      getEnrichmentAddressResponse,
    ),
  );
}

export function getEnrichmentAddressResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetEnrichmentAddressResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEnrichmentAddressResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEnrichmentAddressResponse' from JSON`,
  );
}
