/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListIndustriesGlobals = {
  /**
   * Specify an API version.
   *
   * @remarks
   *
   * API versioning follows the format `vYYYY.QQ.BB`, where
   *   - `YYYY` is the year
   *   - `QQ` is the two-digit month for the first month of the quarter (e.g., 01, 04, 07, 10)
   *   - `BB` is an **optional** build number starting at `.01` for subsequent builds in the same quarter.
   *     - If no build number is specified, the version refers to the initial release of the quarter.
   *
   * The `latest` version represents the most recent development state. It may include breaking changes and should be treated as a beta release.
   */
  xMoovVersion?: string | undefined;
};

export type ListIndustriesRequest = {};

export type ListIndustriesResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.EnrichedIndustry>;
};

/** @internal */
export const ListIndustriesGlobals$inboundSchema: z.ZodType<
  ListIndustriesGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": z.string().default("v2024.01"),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type ListIndustriesGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const ListIndustriesGlobals$outboundSchema: z.ZodType<
  ListIndustriesGlobals$Outbound,
  z.ZodTypeDef,
  ListIndustriesGlobals
> = z.object({
  xMoovVersion: z.string().default("v2024.01"),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIndustriesGlobals$ {
  /** @deprecated use `ListIndustriesGlobals$inboundSchema` instead. */
  export const inboundSchema = ListIndustriesGlobals$inboundSchema;
  /** @deprecated use `ListIndustriesGlobals$outboundSchema` instead. */
  export const outboundSchema = ListIndustriesGlobals$outboundSchema;
  /** @deprecated use `ListIndustriesGlobals$Outbound` instead. */
  export type Outbound = ListIndustriesGlobals$Outbound;
}

export function listIndustriesGlobalsToJSON(
  listIndustriesGlobals: ListIndustriesGlobals,
): string {
  return JSON.stringify(
    ListIndustriesGlobals$outboundSchema.parse(listIndustriesGlobals),
  );
}

export function listIndustriesGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListIndustriesGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIndustriesGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIndustriesGlobals' from JSON`,
  );
}

/** @internal */
export const ListIndustriesRequest$inboundSchema: z.ZodType<
  ListIndustriesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListIndustriesRequest$Outbound = {};

/** @internal */
export const ListIndustriesRequest$outboundSchema: z.ZodType<
  ListIndustriesRequest$Outbound,
  z.ZodTypeDef,
  ListIndustriesRequest
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIndustriesRequest$ {
  /** @deprecated use `ListIndustriesRequest$inboundSchema` instead. */
  export const inboundSchema = ListIndustriesRequest$inboundSchema;
  /** @deprecated use `ListIndustriesRequest$outboundSchema` instead. */
  export const outboundSchema = ListIndustriesRequest$outboundSchema;
  /** @deprecated use `ListIndustriesRequest$Outbound` instead. */
  export type Outbound = ListIndustriesRequest$Outbound;
}

export function listIndustriesRequestToJSON(
  listIndustriesRequest: ListIndustriesRequest,
): string {
  return JSON.stringify(
    ListIndustriesRequest$outboundSchema.parse(listIndustriesRequest),
  );
}

export function listIndustriesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListIndustriesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIndustriesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIndustriesRequest' from JSON`,
  );
}

/** @internal */
export const ListIndustriesResponse$inboundSchema: z.ZodType<
  ListIndustriesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.EnrichedIndustry$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type ListIndustriesResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.EnrichedIndustry$Outbound>;
};

/** @internal */
export const ListIndustriesResponse$outboundSchema: z.ZodType<
  ListIndustriesResponse$Outbound,
  z.ZodTypeDef,
  ListIndustriesResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.EnrichedIndustry$outboundSchema),
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
export namespace ListIndustriesResponse$ {
  /** @deprecated use `ListIndustriesResponse$inboundSchema` instead. */
  export const inboundSchema = ListIndustriesResponse$inboundSchema;
  /** @deprecated use `ListIndustriesResponse$outboundSchema` instead. */
  export const outboundSchema = ListIndustriesResponse$outboundSchema;
  /** @deprecated use `ListIndustriesResponse$Outbound` instead. */
  export type Outbound = ListIndustriesResponse$Outbound;
}

export function listIndustriesResponseToJSON(
  listIndustriesResponse: ListIndustriesResponse,
): string {
  return JSON.stringify(
    ListIndustriesResponse$outboundSchema.parse(listIndustriesResponse),
  );
}

export function listIndustriesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListIndustriesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIndustriesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIndustriesResponse' from JSON`,
  );
}
