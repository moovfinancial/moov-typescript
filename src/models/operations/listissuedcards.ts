/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListIssuedCardsGlobals = {
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

export type ListIssuedCardsRequest = {
  /**
   * The Moov business account for which the cards have been issued.
   */
  accountID: string;
  skip?: number | undefined;
  count?: number | undefined;
  /**
   * Optional, comma-separated states to filter the Moov list issued cards response. For example `active,pending-verification`
   */
  states?: Array<components.IssuedCardState> | undefined;
};

export type ListIssuedCardsResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.IssuedCard>;
};

/** @internal */
export const ListIssuedCardsGlobals$inboundSchema: z.ZodType<
  ListIssuedCardsGlobals,
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
export type ListIssuedCardsGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const ListIssuedCardsGlobals$outboundSchema: z.ZodType<
  ListIssuedCardsGlobals$Outbound,
  z.ZodTypeDef,
  ListIssuedCardsGlobals
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
export namespace ListIssuedCardsGlobals$ {
  /** @deprecated use `ListIssuedCardsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListIssuedCardsGlobals$inboundSchema;
  /** @deprecated use `ListIssuedCardsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListIssuedCardsGlobals$outboundSchema;
  /** @deprecated use `ListIssuedCardsGlobals$Outbound` instead. */
  export type Outbound = ListIssuedCardsGlobals$Outbound;
}

export function listIssuedCardsGlobalsToJSON(
  listIssuedCardsGlobals: ListIssuedCardsGlobals,
): string {
  return JSON.stringify(
    ListIssuedCardsGlobals$outboundSchema.parse(listIssuedCardsGlobals),
  );
}

export function listIssuedCardsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListIssuedCardsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIssuedCardsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIssuedCardsGlobals' from JSON`,
  );
}

/** @internal */
export const ListIssuedCardsRequest$inboundSchema: z.ZodType<
  ListIssuedCardsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  states: z.array(components.IssuedCardState$inboundSchema).optional(),
});

/** @internal */
export type ListIssuedCardsRequest$Outbound = {
  accountID: string;
  skip?: number | undefined;
  count?: number | undefined;
  states?: Array<string> | undefined;
};

/** @internal */
export const ListIssuedCardsRequest$outboundSchema: z.ZodType<
  ListIssuedCardsRequest$Outbound,
  z.ZodTypeDef,
  ListIssuedCardsRequest
> = z.object({
  accountID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  states: z.array(components.IssuedCardState$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIssuedCardsRequest$ {
  /** @deprecated use `ListIssuedCardsRequest$inboundSchema` instead. */
  export const inboundSchema = ListIssuedCardsRequest$inboundSchema;
  /** @deprecated use `ListIssuedCardsRequest$outboundSchema` instead. */
  export const outboundSchema = ListIssuedCardsRequest$outboundSchema;
  /** @deprecated use `ListIssuedCardsRequest$Outbound` instead. */
  export type Outbound = ListIssuedCardsRequest$Outbound;
}

export function listIssuedCardsRequestToJSON(
  listIssuedCardsRequest: ListIssuedCardsRequest,
): string {
  return JSON.stringify(
    ListIssuedCardsRequest$outboundSchema.parse(listIssuedCardsRequest),
  );
}

export function listIssuedCardsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListIssuedCardsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIssuedCardsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIssuedCardsRequest' from JSON`,
  );
}

/** @internal */
export const ListIssuedCardsResponse$inboundSchema: z.ZodType<
  ListIssuedCardsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.IssuedCard$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type ListIssuedCardsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.IssuedCard$Outbound>;
};

/** @internal */
export const ListIssuedCardsResponse$outboundSchema: z.ZodType<
  ListIssuedCardsResponse$Outbound,
  z.ZodTypeDef,
  ListIssuedCardsResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.IssuedCard$outboundSchema),
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
export namespace ListIssuedCardsResponse$ {
  /** @deprecated use `ListIssuedCardsResponse$inboundSchema` instead. */
  export const inboundSchema = ListIssuedCardsResponse$inboundSchema;
  /** @deprecated use `ListIssuedCardsResponse$outboundSchema` instead. */
  export const outboundSchema = ListIssuedCardsResponse$outboundSchema;
  /** @deprecated use `ListIssuedCardsResponse$Outbound` instead. */
  export type Outbound = ListIssuedCardsResponse$Outbound;
}

export function listIssuedCardsResponseToJSON(
  listIssuedCardsResponse: ListIssuedCardsResponse,
): string {
  return JSON.stringify(
    ListIssuedCardsResponse$outboundSchema.parse(listIssuedCardsResponse),
  );
}

export function listIssuedCardsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListIssuedCardsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIssuedCardsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIssuedCardsResponse' from JSON`,
  );
}
