/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListWalletTransactionsGlobals = {
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

export type ListWalletTransactionsRequest = {
  accountID: string;
  skip?: number | undefined;
  count?: number | undefined;
  walletID: string;
  /**
   * Optional parameter to filter by transaction type.
   */
  transactionType?: components.WalletTransactionType | undefined;
  /**
   * Optional parameter to filter by source type (i.e. transfer, dispute, issuing-transaction).
   */
  sourceType?: components.WalletTransactionSourceType | undefined;
  /**
   * Optional parameter to filter by source ID.
   */
  sourceID?: string | undefined;
  /**
   * Optional parameter to filter by status (`pending` or `completed`).
   */
  status?: components.WalletTransactionStatus | undefined;
  /**
   * Optional date-time which inclusively filters all transactions created after this date-time.
   */
  createdStartDateTime?: Date | undefined;
  /**
   * Optional date-time which exclusively filters all transactions created before this date-time.
   */
  createdEndDateTime?: Date | undefined;
  /**
   * Optional date-time which inclusively filters all transactions completed after this date-time.
   */
  completedStartDateTime?: Date | undefined;
  /**
   * Optional date-time which exclusively filters all transactions completed before this date-time.
   */
  completedEndDateTime?: Date | undefined;
  /**
   * Optional ID to filter for transactions accrued in a sweep.
   */
  sweepID?: string | undefined;
};

export type ListWalletTransactionsResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.WalletTransaction>;
};

/** @internal */
export const ListWalletTransactionsGlobals$inboundSchema: z.ZodType<
  ListWalletTransactionsGlobals,
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
export type ListWalletTransactionsGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const ListWalletTransactionsGlobals$outboundSchema: z.ZodType<
  ListWalletTransactionsGlobals$Outbound,
  z.ZodTypeDef,
  ListWalletTransactionsGlobals
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
export namespace ListWalletTransactionsGlobals$ {
  /** @deprecated use `ListWalletTransactionsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListWalletTransactionsGlobals$inboundSchema;
  /** @deprecated use `ListWalletTransactionsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListWalletTransactionsGlobals$outboundSchema;
  /** @deprecated use `ListWalletTransactionsGlobals$Outbound` instead. */
  export type Outbound = ListWalletTransactionsGlobals$Outbound;
}

export function listWalletTransactionsGlobalsToJSON(
  listWalletTransactionsGlobals: ListWalletTransactionsGlobals,
): string {
  return JSON.stringify(
    ListWalletTransactionsGlobals$outboundSchema.parse(
      listWalletTransactionsGlobals,
    ),
  );
}

export function listWalletTransactionsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListWalletTransactionsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWalletTransactionsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWalletTransactionsGlobals' from JSON`,
  );
}

/** @internal */
export const ListWalletTransactionsRequest$inboundSchema: z.ZodType<
  ListWalletTransactionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  walletID: z.string(),
  transactionType: components.WalletTransactionType$inboundSchema.optional(),
  sourceType: components.WalletTransactionSourceType$inboundSchema.optional(),
  sourceID: z.string().optional(),
  status: components.WalletTransactionStatus$inboundSchema.optional(),
  createdStartDateTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  createdEndDateTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  completedStartDateTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  completedEndDateTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  sweepID: z.string().optional(),
});

/** @internal */
export type ListWalletTransactionsRequest$Outbound = {
  accountID: string;
  skip?: number | undefined;
  count?: number | undefined;
  walletID: string;
  transactionType?: string | undefined;
  sourceType?: string | undefined;
  sourceID?: string | undefined;
  status?: string | undefined;
  createdStartDateTime?: string | undefined;
  createdEndDateTime?: string | undefined;
  completedStartDateTime?: string | undefined;
  completedEndDateTime?: string | undefined;
  sweepID?: string | undefined;
};

/** @internal */
export const ListWalletTransactionsRequest$outboundSchema: z.ZodType<
  ListWalletTransactionsRequest$Outbound,
  z.ZodTypeDef,
  ListWalletTransactionsRequest
> = z.object({
  accountID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  walletID: z.string(),
  transactionType: components.WalletTransactionType$outboundSchema.optional(),
  sourceType: components.WalletTransactionSourceType$outboundSchema.optional(),
  sourceID: z.string().optional(),
  status: components.WalletTransactionStatus$outboundSchema.optional(),
  createdStartDateTime: z.date().transform(v => v.toISOString()).optional(),
  createdEndDateTime: z.date().transform(v => v.toISOString()).optional(),
  completedStartDateTime: z.date().transform(v => v.toISOString()).optional(),
  completedEndDateTime: z.date().transform(v => v.toISOString()).optional(),
  sweepID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWalletTransactionsRequest$ {
  /** @deprecated use `ListWalletTransactionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListWalletTransactionsRequest$inboundSchema;
  /** @deprecated use `ListWalletTransactionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListWalletTransactionsRequest$outboundSchema;
  /** @deprecated use `ListWalletTransactionsRequest$Outbound` instead. */
  export type Outbound = ListWalletTransactionsRequest$Outbound;
}

export function listWalletTransactionsRequestToJSON(
  listWalletTransactionsRequest: ListWalletTransactionsRequest,
): string {
  return JSON.stringify(
    ListWalletTransactionsRequest$outboundSchema.parse(
      listWalletTransactionsRequest,
    ),
  );
}

export function listWalletTransactionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListWalletTransactionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWalletTransactionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWalletTransactionsRequest' from JSON`,
  );
}

/** @internal */
export const ListWalletTransactionsResponse$inboundSchema: z.ZodType<
  ListWalletTransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.WalletTransaction$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type ListWalletTransactionsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.WalletTransaction$Outbound>;
};

/** @internal */
export const ListWalletTransactionsResponse$outboundSchema: z.ZodType<
  ListWalletTransactionsResponse$Outbound,
  z.ZodTypeDef,
  ListWalletTransactionsResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.WalletTransaction$outboundSchema),
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
export namespace ListWalletTransactionsResponse$ {
  /** @deprecated use `ListWalletTransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListWalletTransactionsResponse$inboundSchema;
  /** @deprecated use `ListWalletTransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListWalletTransactionsResponse$outboundSchema;
  /** @deprecated use `ListWalletTransactionsResponse$Outbound` instead. */
  export type Outbound = ListWalletTransactionsResponse$Outbound;
}

export function listWalletTransactionsResponseToJSON(
  listWalletTransactionsResponse: ListWalletTransactionsResponse,
): string {
  return JSON.stringify(
    ListWalletTransactionsResponse$outboundSchema.parse(
      listWalletTransactionsResponse,
    ),
  );
}

export function listWalletTransactionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListWalletTransactionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWalletTransactionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWalletTransactionsResponse' from JSON`,
  );
}
