/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountTerminalApplicationGlobals = {
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

export type GetAccountTerminalApplicationRequest = {
  accountID: string;
  terminalApplicationID: string;
};

export type GetAccountTerminalApplicationResponse = {
  headers: { [k: string]: Array<string> };
  result: components.AccountTerminalApplication;
};

/** @internal */
export const GetAccountTerminalApplicationGlobals$inboundSchema: z.ZodType<
  GetAccountTerminalApplicationGlobals,
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
export type GetAccountTerminalApplicationGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const GetAccountTerminalApplicationGlobals$outboundSchema: z.ZodType<
  GetAccountTerminalApplicationGlobals$Outbound,
  z.ZodTypeDef,
  GetAccountTerminalApplicationGlobals
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
export namespace GetAccountTerminalApplicationGlobals$ {
  /** @deprecated use `GetAccountTerminalApplicationGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetAccountTerminalApplicationGlobals$inboundSchema;
  /** @deprecated use `GetAccountTerminalApplicationGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetAccountTerminalApplicationGlobals$outboundSchema;
  /** @deprecated use `GetAccountTerminalApplicationGlobals$Outbound` instead. */
  export type Outbound = GetAccountTerminalApplicationGlobals$Outbound;
}

export function getAccountTerminalApplicationGlobalsToJSON(
  getAccountTerminalApplicationGlobals: GetAccountTerminalApplicationGlobals,
): string {
  return JSON.stringify(
    GetAccountTerminalApplicationGlobals$outboundSchema.parse(
      getAccountTerminalApplicationGlobals,
    ),
  );
}

export function getAccountTerminalApplicationGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountTerminalApplicationGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetAccountTerminalApplicationGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountTerminalApplicationGlobals' from JSON`,
  );
}

/** @internal */
export const GetAccountTerminalApplicationRequest$inboundSchema: z.ZodType<
  GetAccountTerminalApplicationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  terminalApplicationID: z.string(),
});

/** @internal */
export type GetAccountTerminalApplicationRequest$Outbound = {
  accountID: string;
  terminalApplicationID: string;
};

/** @internal */
export const GetAccountTerminalApplicationRequest$outboundSchema: z.ZodType<
  GetAccountTerminalApplicationRequest$Outbound,
  z.ZodTypeDef,
  GetAccountTerminalApplicationRequest
> = z.object({
  accountID: z.string(),
  terminalApplicationID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountTerminalApplicationRequest$ {
  /** @deprecated use `GetAccountTerminalApplicationRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetAccountTerminalApplicationRequest$inboundSchema;
  /** @deprecated use `GetAccountTerminalApplicationRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetAccountTerminalApplicationRequest$outboundSchema;
  /** @deprecated use `GetAccountTerminalApplicationRequest$Outbound` instead. */
  export type Outbound = GetAccountTerminalApplicationRequest$Outbound;
}

export function getAccountTerminalApplicationRequestToJSON(
  getAccountTerminalApplicationRequest: GetAccountTerminalApplicationRequest,
): string {
  return JSON.stringify(
    GetAccountTerminalApplicationRequest$outboundSchema.parse(
      getAccountTerminalApplicationRequest,
    ),
  );
}

export function getAccountTerminalApplicationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountTerminalApplicationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetAccountTerminalApplicationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountTerminalApplicationRequest' from JSON`,
  );
}

/** @internal */
export const GetAccountTerminalApplicationResponse$inboundSchema: z.ZodType<
  GetAccountTerminalApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.AccountTerminalApplication$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetAccountTerminalApplicationResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.AccountTerminalApplication$Outbound;
};

/** @internal */
export const GetAccountTerminalApplicationResponse$outboundSchema: z.ZodType<
  GetAccountTerminalApplicationResponse$Outbound,
  z.ZodTypeDef,
  GetAccountTerminalApplicationResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.AccountTerminalApplication$outboundSchema,
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
export namespace GetAccountTerminalApplicationResponse$ {
  /** @deprecated use `GetAccountTerminalApplicationResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetAccountTerminalApplicationResponse$inboundSchema;
  /** @deprecated use `GetAccountTerminalApplicationResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetAccountTerminalApplicationResponse$outboundSchema;
  /** @deprecated use `GetAccountTerminalApplicationResponse$Outbound` instead. */
  export type Outbound = GetAccountTerminalApplicationResponse$Outbound;
}

export function getAccountTerminalApplicationResponseToJSON(
  getAccountTerminalApplicationResponse: GetAccountTerminalApplicationResponse,
): string {
  return JSON.stringify(
    GetAccountTerminalApplicationResponse$outboundSchema.parse(
      getAccountTerminalApplicationResponse,
    ),
  );
}

export function getAccountTerminalApplicationResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountTerminalApplicationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetAccountTerminalApplicationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountTerminalApplicationResponse' from JSON`,
  );
}
