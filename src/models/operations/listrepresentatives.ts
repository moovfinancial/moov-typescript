/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListRepresentativesGlobals = {
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

export type ListRepresentativesRequest = {
  /**
   * ID of the account.
   */
  accountID: string;
};

export type ListRepresentativesResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.Representative>;
};

/** @internal */
export const ListRepresentativesGlobals$inboundSchema: z.ZodType<
  ListRepresentativesGlobals,
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
export type ListRepresentativesGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const ListRepresentativesGlobals$outboundSchema: z.ZodType<
  ListRepresentativesGlobals$Outbound,
  z.ZodTypeDef,
  ListRepresentativesGlobals
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
export namespace ListRepresentativesGlobals$ {
  /** @deprecated use `ListRepresentativesGlobals$inboundSchema` instead. */
  export const inboundSchema = ListRepresentativesGlobals$inboundSchema;
  /** @deprecated use `ListRepresentativesGlobals$outboundSchema` instead. */
  export const outboundSchema = ListRepresentativesGlobals$outboundSchema;
  /** @deprecated use `ListRepresentativesGlobals$Outbound` instead. */
  export type Outbound = ListRepresentativesGlobals$Outbound;
}

export function listRepresentativesGlobalsToJSON(
  listRepresentativesGlobals: ListRepresentativesGlobals,
): string {
  return JSON.stringify(
    ListRepresentativesGlobals$outboundSchema.parse(listRepresentativesGlobals),
  );
}

export function listRepresentativesGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListRepresentativesGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListRepresentativesGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListRepresentativesGlobals' from JSON`,
  );
}

/** @internal */
export const ListRepresentativesRequest$inboundSchema: z.ZodType<
  ListRepresentativesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
});

/** @internal */
export type ListRepresentativesRequest$Outbound = {
  accountID: string;
};

/** @internal */
export const ListRepresentativesRequest$outboundSchema: z.ZodType<
  ListRepresentativesRequest$Outbound,
  z.ZodTypeDef,
  ListRepresentativesRequest
> = z.object({
  accountID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRepresentativesRequest$ {
  /** @deprecated use `ListRepresentativesRequest$inboundSchema` instead. */
  export const inboundSchema = ListRepresentativesRequest$inboundSchema;
  /** @deprecated use `ListRepresentativesRequest$outboundSchema` instead. */
  export const outboundSchema = ListRepresentativesRequest$outboundSchema;
  /** @deprecated use `ListRepresentativesRequest$Outbound` instead. */
  export type Outbound = ListRepresentativesRequest$Outbound;
}

export function listRepresentativesRequestToJSON(
  listRepresentativesRequest: ListRepresentativesRequest,
): string {
  return JSON.stringify(
    ListRepresentativesRequest$outboundSchema.parse(listRepresentativesRequest),
  );
}

export function listRepresentativesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListRepresentativesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListRepresentativesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListRepresentativesRequest' from JSON`,
  );
}

/** @internal */
export const ListRepresentativesResponse$inboundSchema: z.ZodType<
  ListRepresentativesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.Representative$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type ListRepresentativesResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.Representative$Outbound>;
};

/** @internal */
export const ListRepresentativesResponse$outboundSchema: z.ZodType<
  ListRepresentativesResponse$Outbound,
  z.ZodTypeDef,
  ListRepresentativesResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.Representative$outboundSchema),
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
export namespace ListRepresentativesResponse$ {
  /** @deprecated use `ListRepresentativesResponse$inboundSchema` instead. */
  export const inboundSchema = ListRepresentativesResponse$inboundSchema;
  /** @deprecated use `ListRepresentativesResponse$outboundSchema` instead. */
  export const outboundSchema = ListRepresentativesResponse$outboundSchema;
  /** @deprecated use `ListRepresentativesResponse$Outbound` instead. */
  export type Outbound = ListRepresentativesResponse$Outbound;
}

export function listRepresentativesResponseToJSON(
  listRepresentativesResponse: ListRepresentativesResponse,
): string {
  return JSON.stringify(
    ListRepresentativesResponse$outboundSchema.parse(
      listRepresentativesResponse,
    ),
  );
}

export function listRepresentativesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListRepresentativesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListRepresentativesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListRepresentativesResponse' from JSON`,
  );
}
