/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DisconnectAccountGlobals = {
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

export type DisconnectAccountRequest = {
  accountID: string;
};

export type DisconnectAccountResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const DisconnectAccountGlobals$inboundSchema: z.ZodType<
  DisconnectAccountGlobals,
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
export type DisconnectAccountGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const DisconnectAccountGlobals$outboundSchema: z.ZodType<
  DisconnectAccountGlobals$Outbound,
  z.ZodTypeDef,
  DisconnectAccountGlobals
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
export namespace DisconnectAccountGlobals$ {
  /** @deprecated use `DisconnectAccountGlobals$inboundSchema` instead. */
  export const inboundSchema = DisconnectAccountGlobals$inboundSchema;
  /** @deprecated use `DisconnectAccountGlobals$outboundSchema` instead. */
  export const outboundSchema = DisconnectAccountGlobals$outboundSchema;
  /** @deprecated use `DisconnectAccountGlobals$Outbound` instead. */
  export type Outbound = DisconnectAccountGlobals$Outbound;
}

export function disconnectAccountGlobalsToJSON(
  disconnectAccountGlobals: DisconnectAccountGlobals,
): string {
  return JSON.stringify(
    DisconnectAccountGlobals$outboundSchema.parse(disconnectAccountGlobals),
  );
}

export function disconnectAccountGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DisconnectAccountGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DisconnectAccountGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DisconnectAccountGlobals' from JSON`,
  );
}

/** @internal */
export const DisconnectAccountRequest$inboundSchema: z.ZodType<
  DisconnectAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
});

/** @internal */
export type DisconnectAccountRequest$Outbound = {
  accountID: string;
};

/** @internal */
export const DisconnectAccountRequest$outboundSchema: z.ZodType<
  DisconnectAccountRequest$Outbound,
  z.ZodTypeDef,
  DisconnectAccountRequest
> = z.object({
  accountID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisconnectAccountRequest$ {
  /** @deprecated use `DisconnectAccountRequest$inboundSchema` instead. */
  export const inboundSchema = DisconnectAccountRequest$inboundSchema;
  /** @deprecated use `DisconnectAccountRequest$outboundSchema` instead. */
  export const outboundSchema = DisconnectAccountRequest$outboundSchema;
  /** @deprecated use `DisconnectAccountRequest$Outbound` instead. */
  export type Outbound = DisconnectAccountRequest$Outbound;
}

export function disconnectAccountRequestToJSON(
  disconnectAccountRequest: DisconnectAccountRequest,
): string {
  return JSON.stringify(
    DisconnectAccountRequest$outboundSchema.parse(disconnectAccountRequest),
  );
}

export function disconnectAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<DisconnectAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DisconnectAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DisconnectAccountRequest' from JSON`,
  );
}

/** @internal */
export const DisconnectAccountResponse$inboundSchema: z.ZodType<
  DisconnectAccountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type DisconnectAccountResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const DisconnectAccountResponse$outboundSchema: z.ZodType<
  DisconnectAccountResponse$Outbound,
  z.ZodTypeDef,
  DisconnectAccountResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisconnectAccountResponse$ {
  /** @deprecated use `DisconnectAccountResponse$inboundSchema` instead. */
  export const inboundSchema = DisconnectAccountResponse$inboundSchema;
  /** @deprecated use `DisconnectAccountResponse$outboundSchema` instead. */
  export const outboundSchema = DisconnectAccountResponse$outboundSchema;
  /** @deprecated use `DisconnectAccountResponse$Outbound` instead. */
  export type Outbound = DisconnectAccountResponse$Outbound;
}

export function disconnectAccountResponseToJSON(
  disconnectAccountResponse: DisconnectAccountResponse,
): string {
  return JSON.stringify(
    DisconnectAccountResponse$outboundSchema.parse(disconnectAccountResponse),
  );
}

export function disconnectAccountResponseFromJSON(
  jsonString: string,
): SafeParseResult<DisconnectAccountResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DisconnectAccountResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DisconnectAccountResponse' from JSON`,
  );
}
