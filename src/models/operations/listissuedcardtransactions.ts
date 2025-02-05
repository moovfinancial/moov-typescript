/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListIssuedCardTransactionsGlobals = {
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

export type ListIssuedCardTransactionsRequest = {
  /**
   * The Moov business account for which cards have been issued.
   */
  accountID: string;
  skip?: number | undefined;
  count?: number | undefined;
  /**
   * Optional ID of the issued card to filter results.
   */
  issuedCardID?: string | undefined;
  /**
   * Optional date-time which inclusively filters all card transactions created after this date-time.
   */
  startDateTime?: Date | undefined;
  /**
   * Optional date-time which exclusively filters all card transactions created before this date-time.
   */
  endDateTime?: Date | undefined;
};

export type ListIssuedCardTransactionsResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.IssuedCardTransaction>;
};

/** @internal */
export const ListIssuedCardTransactionsGlobals$inboundSchema: z.ZodType<
  ListIssuedCardTransactionsGlobals,
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
export type ListIssuedCardTransactionsGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const ListIssuedCardTransactionsGlobals$outboundSchema: z.ZodType<
  ListIssuedCardTransactionsGlobals$Outbound,
  z.ZodTypeDef,
  ListIssuedCardTransactionsGlobals
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
export namespace ListIssuedCardTransactionsGlobals$ {
  /** @deprecated use `ListIssuedCardTransactionsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListIssuedCardTransactionsGlobals$inboundSchema;
  /** @deprecated use `ListIssuedCardTransactionsGlobals$outboundSchema` instead. */
  export const outboundSchema =
    ListIssuedCardTransactionsGlobals$outboundSchema;
  /** @deprecated use `ListIssuedCardTransactionsGlobals$Outbound` instead. */
  export type Outbound = ListIssuedCardTransactionsGlobals$Outbound;
}

export function listIssuedCardTransactionsGlobalsToJSON(
  listIssuedCardTransactionsGlobals: ListIssuedCardTransactionsGlobals,
): string {
  return JSON.stringify(
    ListIssuedCardTransactionsGlobals$outboundSchema.parse(
      listIssuedCardTransactionsGlobals,
    ),
  );
}

export function listIssuedCardTransactionsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListIssuedCardTransactionsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIssuedCardTransactionsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIssuedCardTransactionsGlobals' from JSON`,
  );
}

/** @internal */
export const ListIssuedCardTransactionsRequest$inboundSchema: z.ZodType<
  ListIssuedCardTransactionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  issuedCardID: z.string().optional(),
  startDateTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  endDateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type ListIssuedCardTransactionsRequest$Outbound = {
  accountID: string;
  skip?: number | undefined;
  count?: number | undefined;
  issuedCardID?: string | undefined;
  startDateTime?: string | undefined;
  endDateTime?: string | undefined;
};

/** @internal */
export const ListIssuedCardTransactionsRequest$outboundSchema: z.ZodType<
  ListIssuedCardTransactionsRequest$Outbound,
  z.ZodTypeDef,
  ListIssuedCardTransactionsRequest
> = z.object({
  accountID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  issuedCardID: z.string().optional(),
  startDateTime: z.date().transform(v => v.toISOString()).optional(),
  endDateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIssuedCardTransactionsRequest$ {
  /** @deprecated use `ListIssuedCardTransactionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListIssuedCardTransactionsRequest$inboundSchema;
  /** @deprecated use `ListIssuedCardTransactionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListIssuedCardTransactionsRequest$outboundSchema;
  /** @deprecated use `ListIssuedCardTransactionsRequest$Outbound` instead. */
  export type Outbound = ListIssuedCardTransactionsRequest$Outbound;
}

export function listIssuedCardTransactionsRequestToJSON(
  listIssuedCardTransactionsRequest: ListIssuedCardTransactionsRequest,
): string {
  return JSON.stringify(
    ListIssuedCardTransactionsRequest$outboundSchema.parse(
      listIssuedCardTransactionsRequest,
    ),
  );
}

export function listIssuedCardTransactionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListIssuedCardTransactionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIssuedCardTransactionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIssuedCardTransactionsRequest' from JSON`,
  );
}

/** @internal */
export const ListIssuedCardTransactionsResponse$inboundSchema: z.ZodType<
  ListIssuedCardTransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.IssuedCardTransaction$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type ListIssuedCardTransactionsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.IssuedCardTransaction$Outbound>;
};

/** @internal */
export const ListIssuedCardTransactionsResponse$outboundSchema: z.ZodType<
  ListIssuedCardTransactionsResponse$Outbound,
  z.ZodTypeDef,
  ListIssuedCardTransactionsResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.IssuedCardTransaction$outboundSchema),
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
export namespace ListIssuedCardTransactionsResponse$ {
  /** @deprecated use `ListIssuedCardTransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListIssuedCardTransactionsResponse$inboundSchema;
  /** @deprecated use `ListIssuedCardTransactionsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListIssuedCardTransactionsResponse$outboundSchema;
  /** @deprecated use `ListIssuedCardTransactionsResponse$Outbound` instead. */
  export type Outbound = ListIssuedCardTransactionsResponse$Outbound;
}

export function listIssuedCardTransactionsResponseToJSON(
  listIssuedCardTransactionsResponse: ListIssuedCardTransactionsResponse,
): string {
  return JSON.stringify(
    ListIssuedCardTransactionsResponse$outboundSchema.parse(
      listIssuedCardTransactionsResponse,
    ),
  );
}

export function listIssuedCardTransactionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListIssuedCardTransactionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListIssuedCardTransactionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIssuedCardTransactionsResponse' from JSON`,
  );
}
