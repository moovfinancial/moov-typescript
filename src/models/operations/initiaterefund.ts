/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type InitiateRefundGlobals = {
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

export type InitiateRefundRequest = {
  /**
   * Prevents duplicate refunds from being created.
   */
  xIdempotencyKey: string;
  /**
   * Optional header that indicates whether to return a synchronous response that includes full transfer and rail-specific details or an
   *
   * @remarks
   * asynchronous response indicating the transfer was created (this is the default response if the header is omitted). A timeout will occur after 15 seconds.
   */
  xWaitFor?: components.TransferWaitFor | undefined;
  /**
   * The merchant's Moov account ID.
   */
  accountID: string;
  /**
   * Identifier for the transfer.
   */
  transferID: string;
  createRefund?: components.CreateRefund | undefined;
};

export type InitiateRefundResponseResult =
  | components.CardAcquiringRefund
  | components.CreateRefundResponse;

export type InitiateRefundResponse = {
  headers: { [k: string]: Array<string> };
  result: components.CardAcquiringRefund | components.CreateRefundResponse;
};

/** @internal */
export const InitiateRefundGlobals$inboundSchema: z.ZodType<
  InitiateRefundGlobals,
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
export type InitiateRefundGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const InitiateRefundGlobals$outboundSchema: z.ZodType<
  InitiateRefundGlobals$Outbound,
  z.ZodTypeDef,
  InitiateRefundGlobals
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
export namespace InitiateRefundGlobals$ {
  /** @deprecated use `InitiateRefundGlobals$inboundSchema` instead. */
  export const inboundSchema = InitiateRefundGlobals$inboundSchema;
  /** @deprecated use `InitiateRefundGlobals$outboundSchema` instead. */
  export const outboundSchema = InitiateRefundGlobals$outboundSchema;
  /** @deprecated use `InitiateRefundGlobals$Outbound` instead. */
  export type Outbound = InitiateRefundGlobals$Outbound;
}

export function initiateRefundGlobalsToJSON(
  initiateRefundGlobals: InitiateRefundGlobals,
): string {
  return JSON.stringify(
    InitiateRefundGlobals$outboundSchema.parse(initiateRefundGlobals),
  );
}

export function initiateRefundGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<InitiateRefundGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InitiateRefundGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateRefundGlobals' from JSON`,
  );
}

/** @internal */
export const InitiateRefundRequest$inboundSchema: z.ZodType<
  InitiateRefundRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-idempotency-key": z.string(),
  "x-wait-for": components.TransferWaitFor$inboundSchema.optional(),
  accountID: z.string(),
  transferID: z.string(),
  CreateRefund: components.CreateRefund$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "x-idempotency-key": "xIdempotencyKey",
    "x-wait-for": "xWaitFor",
    "CreateRefund": "createRefund",
  });
});

/** @internal */
export type InitiateRefundRequest$Outbound = {
  "x-idempotency-key": string;
  "x-wait-for"?: string | undefined;
  accountID: string;
  transferID: string;
  CreateRefund?: components.CreateRefund$Outbound | undefined;
};

/** @internal */
export const InitiateRefundRequest$outboundSchema: z.ZodType<
  InitiateRefundRequest$Outbound,
  z.ZodTypeDef,
  InitiateRefundRequest
> = z.object({
  xIdempotencyKey: z.string(),
  xWaitFor: components.TransferWaitFor$outboundSchema.optional(),
  accountID: z.string(),
  transferID: z.string(),
  createRefund: components.CreateRefund$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    xIdempotencyKey: "x-idempotency-key",
    xWaitFor: "x-wait-for",
    createRefund: "CreateRefund",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateRefundRequest$ {
  /** @deprecated use `InitiateRefundRequest$inboundSchema` instead. */
  export const inboundSchema = InitiateRefundRequest$inboundSchema;
  /** @deprecated use `InitiateRefundRequest$outboundSchema` instead. */
  export const outboundSchema = InitiateRefundRequest$outboundSchema;
  /** @deprecated use `InitiateRefundRequest$Outbound` instead. */
  export type Outbound = InitiateRefundRequest$Outbound;
}

export function initiateRefundRequestToJSON(
  initiateRefundRequest: InitiateRefundRequest,
): string {
  return JSON.stringify(
    InitiateRefundRequest$outboundSchema.parse(initiateRefundRequest),
  );
}

export function initiateRefundRequestFromJSON(
  jsonString: string,
): SafeParseResult<InitiateRefundRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InitiateRefundRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateRefundRequest' from JSON`,
  );
}

/** @internal */
export const InitiateRefundResponseResult$inboundSchema: z.ZodType<
  InitiateRefundResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.CardAcquiringRefund$inboundSchema,
  components.CreateRefundResponse$inboundSchema,
]);

/** @internal */
export type InitiateRefundResponseResult$Outbound =
  | components.CardAcquiringRefund$Outbound
  | components.CreateRefundResponse$Outbound;

/** @internal */
export const InitiateRefundResponseResult$outboundSchema: z.ZodType<
  InitiateRefundResponseResult$Outbound,
  z.ZodTypeDef,
  InitiateRefundResponseResult
> = z.union([
  components.CardAcquiringRefund$outboundSchema,
  components.CreateRefundResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateRefundResponseResult$ {
  /** @deprecated use `InitiateRefundResponseResult$inboundSchema` instead. */
  export const inboundSchema = InitiateRefundResponseResult$inboundSchema;
  /** @deprecated use `InitiateRefundResponseResult$outboundSchema` instead. */
  export const outboundSchema = InitiateRefundResponseResult$outboundSchema;
  /** @deprecated use `InitiateRefundResponseResult$Outbound` instead. */
  export type Outbound = InitiateRefundResponseResult$Outbound;
}

export function initiateRefundResponseResultToJSON(
  initiateRefundResponseResult: InitiateRefundResponseResult,
): string {
  return JSON.stringify(
    InitiateRefundResponseResult$outboundSchema.parse(
      initiateRefundResponseResult,
    ),
  );
}

export function initiateRefundResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<InitiateRefundResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InitiateRefundResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateRefundResponseResult' from JSON`,
  );
}

/** @internal */
export const InitiateRefundResponse$inboundSchema: z.ZodType<
  InitiateRefundResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([
    components.CardAcquiringRefund$inboundSchema,
    components.CreateRefundResponse$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type InitiateRefundResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result:
    | components.CardAcquiringRefund$Outbound
    | components.CreateRefundResponse$Outbound;
};

/** @internal */
export const InitiateRefundResponse$outboundSchema: z.ZodType<
  InitiateRefundResponse$Outbound,
  z.ZodTypeDef,
  InitiateRefundResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([
    components.CardAcquiringRefund$outboundSchema,
    components.CreateRefundResponse$outboundSchema,
  ]),
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
export namespace InitiateRefundResponse$ {
  /** @deprecated use `InitiateRefundResponse$inboundSchema` instead. */
  export const inboundSchema = InitiateRefundResponse$inboundSchema;
  /** @deprecated use `InitiateRefundResponse$outboundSchema` instead. */
  export const outboundSchema = InitiateRefundResponse$outboundSchema;
  /** @deprecated use `InitiateRefundResponse$Outbound` instead. */
  export type Outbound = InitiateRefundResponse$Outbound;
}

export function initiateRefundResponseToJSON(
  initiateRefundResponse: InitiateRefundResponse,
): string {
  return JSON.stringify(
    InitiateRefundResponse$outboundSchema.parse(initiateRefundResponse),
  );
}

export function initiateRefundResponseFromJSON(
  jsonString: string,
): SafeParseResult<InitiateRefundResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InitiateRefundResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateRefundResponse' from JSON`,
  );
}
