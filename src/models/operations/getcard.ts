/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCardGlobals = {
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

export type GetCardRequest = {
  accountID: string;
  cardID: string;
};

export type GetCardResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Card;
};

/** @internal */
export const GetCardGlobals$inboundSchema: z.ZodType<
  GetCardGlobals,
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
export type GetCardGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const GetCardGlobals$outboundSchema: z.ZodType<
  GetCardGlobals$Outbound,
  z.ZodTypeDef,
  GetCardGlobals
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
export namespace GetCardGlobals$ {
  /** @deprecated use `GetCardGlobals$inboundSchema` instead. */
  export const inboundSchema = GetCardGlobals$inboundSchema;
  /** @deprecated use `GetCardGlobals$outboundSchema` instead. */
  export const outboundSchema = GetCardGlobals$outboundSchema;
  /** @deprecated use `GetCardGlobals$Outbound` instead. */
  export type Outbound = GetCardGlobals$Outbound;
}

export function getCardGlobalsToJSON(getCardGlobals: GetCardGlobals): string {
  return JSON.stringify(GetCardGlobals$outboundSchema.parse(getCardGlobals));
}

export function getCardGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetCardGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCardGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCardGlobals' from JSON`,
  );
}

/** @internal */
export const GetCardRequest$inboundSchema: z.ZodType<
  GetCardRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  cardID: z.string(),
});

/** @internal */
export type GetCardRequest$Outbound = {
  accountID: string;
  cardID: string;
};

/** @internal */
export const GetCardRequest$outboundSchema: z.ZodType<
  GetCardRequest$Outbound,
  z.ZodTypeDef,
  GetCardRequest
> = z.object({
  accountID: z.string(),
  cardID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCardRequest$ {
  /** @deprecated use `GetCardRequest$inboundSchema` instead. */
  export const inboundSchema = GetCardRequest$inboundSchema;
  /** @deprecated use `GetCardRequest$outboundSchema` instead. */
  export const outboundSchema = GetCardRequest$outboundSchema;
  /** @deprecated use `GetCardRequest$Outbound` instead. */
  export type Outbound = GetCardRequest$Outbound;
}

export function getCardRequestToJSON(getCardRequest: GetCardRequest): string {
  return JSON.stringify(GetCardRequest$outboundSchema.parse(getCardRequest));
}

export function getCardRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCardRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCardRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCardRequest' from JSON`,
  );
}

/** @internal */
export const GetCardResponse$inboundSchema: z.ZodType<
  GetCardResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.Card$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetCardResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Card$Outbound;
};

/** @internal */
export const GetCardResponse$outboundSchema: z.ZodType<
  GetCardResponse$Outbound,
  z.ZodTypeDef,
  GetCardResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.Card$outboundSchema,
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
export namespace GetCardResponse$ {
  /** @deprecated use `GetCardResponse$inboundSchema` instead. */
  export const inboundSchema = GetCardResponse$inboundSchema;
  /** @deprecated use `GetCardResponse$outboundSchema` instead. */
  export const outboundSchema = GetCardResponse$outboundSchema;
  /** @deprecated use `GetCardResponse$Outbound` instead. */
  export type Outbound = GetCardResponse$Outbound;
}

export function getCardResponseToJSON(
  getCardResponse: GetCardResponse,
): string {
  return JSON.stringify(GetCardResponse$outboundSchema.parse(getCardResponse));
}

export function getCardResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCardResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCardResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCardResponse' from JSON`,
  );
}
