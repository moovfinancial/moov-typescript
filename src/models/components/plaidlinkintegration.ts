/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * This is used by Moov.js with a Plaid reseller relationship. The details of a Plaid link integration for a linked funding source.
 *
 * @remarks
 *
 * You can simulate linking bank accounts with Plaid in test mode. See our [test mode](https://docs.moov.io/guides/get-started/test-mode/#plaid)
 * guide for more information.
 *
 * Plaid's `sandbox` environment - (requires Plaid reseller setup with Moov). When linking a bank account to a `sandbox` account using a Plaid
 * public token it will utilize Plaid's sandbox environment. The Plaid public token provided must be generated from Plaid's sandbox environment.
 * Please see <a href="https://plaid.com/docs/api/sandbox/#sandboxpublic_tokencreate" target="_blank">Plaid's sandbox documentation</a> for more
 * details.
 */
export type PlaidLinkIntegration = {
  publicToken: string;
};

/** @internal */
export const PlaidLinkIntegration$inboundSchema: z.ZodType<
  PlaidLinkIntegration,
  z.ZodTypeDef,
  unknown
> = z.object({
  publicToken: z.string(),
});

/** @internal */
export type PlaidLinkIntegration$Outbound = {
  publicToken: string;
};

/** @internal */
export const PlaidLinkIntegration$outboundSchema: z.ZodType<
  PlaidLinkIntegration$Outbound,
  z.ZodTypeDef,
  PlaidLinkIntegration
> = z.object({
  publicToken: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaidLinkIntegration$ {
  /** @deprecated use `PlaidLinkIntegration$inboundSchema` instead. */
  export const inboundSchema = PlaidLinkIntegration$inboundSchema;
  /** @deprecated use `PlaidLinkIntegration$outboundSchema` instead. */
  export const outboundSchema = PlaidLinkIntegration$outboundSchema;
  /** @deprecated use `PlaidLinkIntegration$Outbound` instead. */
  export type Outbound = PlaidLinkIntegration$Outbound;
}

export function plaidLinkIntegrationToJSON(
  plaidLinkIntegration: PlaidLinkIntegration,
): string {
  return JSON.stringify(
    PlaidLinkIntegration$outboundSchema.parse(plaidLinkIntegration),
  );
}

export function plaidLinkIntegrationFromJSON(
  jsonString: string,
): SafeParseResult<PlaidLinkIntegration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaidLinkIntegration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaidLinkIntegration' from JSON`,
  );
}
