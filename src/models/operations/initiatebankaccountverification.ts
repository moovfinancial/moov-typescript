/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type InitiateBankAccountVerificationGlobals = {
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

export type InitiateBankAccountVerificationRequest = {
  /**
   * Optional header to wait for certain events, such as the rail response, to occur before returning a response.
   *
   * @remarks
   *
   * When this header is set to `rail-response`, the endpoint will wait for a sent-credit or failed status from the payment rail.
   */
  xWaitFor?: components.BankAccountWaitFor | undefined;
  accountID: string;
  bankAccountID: string;
};

export type InitiateBankAccountVerificationResponse = {
  headers: { [k: string]: Array<string> };
  result: components.BankAccountVerificationCreated;
};

/** @internal */
export const InitiateBankAccountVerificationGlobals$inboundSchema: z.ZodType<
  InitiateBankAccountVerificationGlobals,
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
export type InitiateBankAccountVerificationGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const InitiateBankAccountVerificationGlobals$outboundSchema: z.ZodType<
  InitiateBankAccountVerificationGlobals$Outbound,
  z.ZodTypeDef,
  InitiateBankAccountVerificationGlobals
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
export namespace InitiateBankAccountVerificationGlobals$ {
  /** @deprecated use `InitiateBankAccountVerificationGlobals$inboundSchema` instead. */
  export const inboundSchema =
    InitiateBankAccountVerificationGlobals$inboundSchema;
  /** @deprecated use `InitiateBankAccountVerificationGlobals$outboundSchema` instead. */
  export const outboundSchema =
    InitiateBankAccountVerificationGlobals$outboundSchema;
  /** @deprecated use `InitiateBankAccountVerificationGlobals$Outbound` instead. */
  export type Outbound = InitiateBankAccountVerificationGlobals$Outbound;
}

export function initiateBankAccountVerificationGlobalsToJSON(
  initiateBankAccountVerificationGlobals:
    InitiateBankAccountVerificationGlobals,
): string {
  return JSON.stringify(
    InitiateBankAccountVerificationGlobals$outboundSchema.parse(
      initiateBankAccountVerificationGlobals,
    ),
  );
}

export function initiateBankAccountVerificationGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<InitiateBankAccountVerificationGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateBankAccountVerificationGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateBankAccountVerificationGlobals' from JSON`,
  );
}

/** @internal */
export const InitiateBankAccountVerificationRequest$inboundSchema: z.ZodType<
  InitiateBankAccountVerificationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-wait-for": components.BankAccountWaitFor$inboundSchema.optional(),
  accountID: z.string(),
  bankAccountID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-wait-for": "xWaitFor",
  });
});

/** @internal */
export type InitiateBankAccountVerificationRequest$Outbound = {
  "x-wait-for"?: string | undefined;
  accountID: string;
  bankAccountID: string;
};

/** @internal */
export const InitiateBankAccountVerificationRequest$outboundSchema: z.ZodType<
  InitiateBankAccountVerificationRequest$Outbound,
  z.ZodTypeDef,
  InitiateBankAccountVerificationRequest
> = z.object({
  xWaitFor: components.BankAccountWaitFor$outboundSchema.optional(),
  accountID: z.string(),
  bankAccountID: z.string(),
}).transform((v) => {
  return remap$(v, {
    xWaitFor: "x-wait-for",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitiateBankAccountVerificationRequest$ {
  /** @deprecated use `InitiateBankAccountVerificationRequest$inboundSchema` instead. */
  export const inboundSchema =
    InitiateBankAccountVerificationRequest$inboundSchema;
  /** @deprecated use `InitiateBankAccountVerificationRequest$outboundSchema` instead. */
  export const outboundSchema =
    InitiateBankAccountVerificationRequest$outboundSchema;
  /** @deprecated use `InitiateBankAccountVerificationRequest$Outbound` instead. */
  export type Outbound = InitiateBankAccountVerificationRequest$Outbound;
}

export function initiateBankAccountVerificationRequestToJSON(
  initiateBankAccountVerificationRequest:
    InitiateBankAccountVerificationRequest,
): string {
  return JSON.stringify(
    InitiateBankAccountVerificationRequest$outboundSchema.parse(
      initiateBankAccountVerificationRequest,
    ),
  );
}

export function initiateBankAccountVerificationRequestFromJSON(
  jsonString: string,
): SafeParseResult<InitiateBankAccountVerificationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateBankAccountVerificationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitiateBankAccountVerificationRequest' from JSON`,
  );
}

/** @internal */
export const InitiateBankAccountVerificationResponse$inboundSchema: z.ZodType<
  InitiateBankAccountVerificationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.BankAccountVerificationCreated$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type InitiateBankAccountVerificationResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.BankAccountVerificationCreated$Outbound;
};

/** @internal */
export const InitiateBankAccountVerificationResponse$outboundSchema: z.ZodType<
  InitiateBankAccountVerificationResponse$Outbound,
  z.ZodTypeDef,
  InitiateBankAccountVerificationResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.BankAccountVerificationCreated$outboundSchema,
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
export namespace InitiateBankAccountVerificationResponse$ {
  /** @deprecated use `InitiateBankAccountVerificationResponse$inboundSchema` instead. */
  export const inboundSchema =
    InitiateBankAccountVerificationResponse$inboundSchema;
  /** @deprecated use `InitiateBankAccountVerificationResponse$outboundSchema` instead. */
  export const outboundSchema =
    InitiateBankAccountVerificationResponse$outboundSchema;
  /** @deprecated use `InitiateBankAccountVerificationResponse$Outbound` instead. */
  export type Outbound = InitiateBankAccountVerificationResponse$Outbound;
}

export function initiateBankAccountVerificationResponseToJSON(
  initiateBankAccountVerificationResponse:
    InitiateBankAccountVerificationResponse,
): string {
  return JSON.stringify(
    InitiateBankAccountVerificationResponse$outboundSchema.parse(
      initiateBankAccountVerificationResponse,
    ),
  );
}

export function initiateBankAccountVerificationResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  InitiateBankAccountVerificationResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InitiateBankAccountVerificationResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'InitiateBankAccountVerificationResponse' from JSON`,
  );
}
