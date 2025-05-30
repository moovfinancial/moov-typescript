/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ACHPaymentSettings = {
  /**
   * The description that shows up on ACH transactions. This will default to the account's display name on account creation.
   */
  companyName: string;
};

/** @internal */
export const ACHPaymentSettings$inboundSchema: z.ZodType<
  ACHPaymentSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyName: z.string(),
});

/** @internal */
export type ACHPaymentSettings$Outbound = {
  companyName: string;
};

/** @internal */
export const ACHPaymentSettings$outboundSchema: z.ZodType<
  ACHPaymentSettings$Outbound,
  z.ZodTypeDef,
  ACHPaymentSettings
> = z.object({
  companyName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ACHPaymentSettings$ {
  /** @deprecated use `ACHPaymentSettings$inboundSchema` instead. */
  export const inboundSchema = ACHPaymentSettings$inboundSchema;
  /** @deprecated use `ACHPaymentSettings$outboundSchema` instead. */
  export const outboundSchema = ACHPaymentSettings$outboundSchema;
  /** @deprecated use `ACHPaymentSettings$Outbound` instead. */
  export type Outbound = ACHPaymentSettings$Outbound;
}

export function achPaymentSettingsToJSON(
  achPaymentSettings: ACHPaymentSettings,
): string {
  return JSON.stringify(
    ACHPaymentSettings$outboundSchema.parse(achPaymentSettings),
  );
}

export function achPaymentSettingsFromJSON(
  jsonString: string,
): SafeParseResult<ACHPaymentSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ACHPaymentSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ACHPaymentSettings' from JSON`,
  );
}
