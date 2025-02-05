/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LinkBankAccountGlobals = {
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

export type LinkBankAccountRequest = {
  /**
   * Optional header to wait for certain events, such as the creation of a payment method, to occur before returning a response.
   *
   * @remarks
   *
   * When this header is set to `payment-method`, the response will include any payment methods that were created for the newly
   * linked card in the `paymentMethods` field. Otherwise, the `paymentMethods` field will be omitted from the response.
   */
  xWaitFor?: components.BankAccountWaitFor | undefined;
  accountID: string;
  linkBankAccount: components.LinkBankAccount;
};

export type LinkBankAccountResponse = {
  headers: { [k: string]: Array<string> };
  result: components.BankAccount;
};

/** @internal */
export const LinkBankAccountGlobals$inboundSchema: z.ZodType<
  LinkBankAccountGlobals,
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
export type LinkBankAccountGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const LinkBankAccountGlobals$outboundSchema: z.ZodType<
  LinkBankAccountGlobals$Outbound,
  z.ZodTypeDef,
  LinkBankAccountGlobals
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
export namespace LinkBankAccountGlobals$ {
  /** @deprecated use `LinkBankAccountGlobals$inboundSchema` instead. */
  export const inboundSchema = LinkBankAccountGlobals$inboundSchema;
  /** @deprecated use `LinkBankAccountGlobals$outboundSchema` instead. */
  export const outboundSchema = LinkBankAccountGlobals$outboundSchema;
  /** @deprecated use `LinkBankAccountGlobals$Outbound` instead. */
  export type Outbound = LinkBankAccountGlobals$Outbound;
}

export function linkBankAccountGlobalsToJSON(
  linkBankAccountGlobals: LinkBankAccountGlobals,
): string {
  return JSON.stringify(
    LinkBankAccountGlobals$outboundSchema.parse(linkBankAccountGlobals),
  );
}

export function linkBankAccountGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<LinkBankAccountGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkBankAccountGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkBankAccountGlobals' from JSON`,
  );
}

/** @internal */
export const LinkBankAccountRequest$inboundSchema: z.ZodType<
  LinkBankAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-wait-for": components.BankAccountWaitFor$inboundSchema.optional(),
  accountID: z.string(),
  LinkBankAccount: components.LinkBankAccount$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-wait-for": "xWaitFor",
    "LinkBankAccount": "linkBankAccount",
  });
});

/** @internal */
export type LinkBankAccountRequest$Outbound = {
  "x-wait-for"?: string | undefined;
  accountID: string;
  LinkBankAccount: components.LinkBankAccount$Outbound;
};

/** @internal */
export const LinkBankAccountRequest$outboundSchema: z.ZodType<
  LinkBankAccountRequest$Outbound,
  z.ZodTypeDef,
  LinkBankAccountRequest
> = z.object({
  xWaitFor: components.BankAccountWaitFor$outboundSchema.optional(),
  accountID: z.string(),
  linkBankAccount: components.LinkBankAccount$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xWaitFor: "x-wait-for",
    linkBankAccount: "LinkBankAccount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkBankAccountRequest$ {
  /** @deprecated use `LinkBankAccountRequest$inboundSchema` instead. */
  export const inboundSchema = LinkBankAccountRequest$inboundSchema;
  /** @deprecated use `LinkBankAccountRequest$outboundSchema` instead. */
  export const outboundSchema = LinkBankAccountRequest$outboundSchema;
  /** @deprecated use `LinkBankAccountRequest$Outbound` instead. */
  export type Outbound = LinkBankAccountRequest$Outbound;
}

export function linkBankAccountRequestToJSON(
  linkBankAccountRequest: LinkBankAccountRequest,
): string {
  return JSON.stringify(
    LinkBankAccountRequest$outboundSchema.parse(linkBankAccountRequest),
  );
}

export function linkBankAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<LinkBankAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkBankAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkBankAccountRequest' from JSON`,
  );
}

/** @internal */
export const LinkBankAccountResponse$inboundSchema: z.ZodType<
  LinkBankAccountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.BankAccount$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type LinkBankAccountResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.BankAccount$Outbound;
};

/** @internal */
export const LinkBankAccountResponse$outboundSchema: z.ZodType<
  LinkBankAccountResponse$Outbound,
  z.ZodTypeDef,
  LinkBankAccountResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.BankAccount$outboundSchema,
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
export namespace LinkBankAccountResponse$ {
  /** @deprecated use `LinkBankAccountResponse$inboundSchema` instead. */
  export const inboundSchema = LinkBankAccountResponse$inboundSchema;
  /** @deprecated use `LinkBankAccountResponse$outboundSchema` instead. */
  export const outboundSchema = LinkBankAccountResponse$outboundSchema;
  /** @deprecated use `LinkBankAccountResponse$Outbound` instead. */
  export type Outbound = LinkBankAccountResponse$Outbound;
}

export function linkBankAccountResponseToJSON(
  linkBankAccountResponse: LinkBankAccountResponse,
): string {
  return JSON.stringify(
    LinkBankAccountResponse$outboundSchema.parse(linkBankAccountResponse),
  );
}

export function linkBankAccountResponseFromJSON(
  jsonString: string,
): SafeParseResult<LinkBankAccountResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkBankAccountResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkBankAccountResponse' from JSON`,
  );
}
