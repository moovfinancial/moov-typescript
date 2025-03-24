/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CardVerificationResult,
  CardVerificationResult$inboundSchema,
  CardVerificationResult$outboundSchema,
} from "./cardverificationresult.js";

/**
 * The results of submitting cardholder name to a card network for verification.
 */
export type AccountNameVerification = {
  firstName?: CardVerificationResult | undefined;
  lastName?: CardVerificationResult | undefined;
  middleName?: CardVerificationResult | undefined;
  fullName?: CardVerificationResult | undefined;
};

/** @internal */
export const AccountNameVerification$inboundSchema: z.ZodType<
  AccountNameVerification,
  z.ZodTypeDef,
  unknown
> = z.object({
  firstName: CardVerificationResult$inboundSchema.optional(),
  lastName: CardVerificationResult$inboundSchema.optional(),
  middleName: CardVerificationResult$inboundSchema.optional(),
  fullName: CardVerificationResult$inboundSchema.optional(),
});

/** @internal */
export type AccountNameVerification$Outbound = {
  firstName?: string | undefined;
  lastName?: string | undefined;
  middleName?: string | undefined;
  fullName?: string | undefined;
};

/** @internal */
export const AccountNameVerification$outboundSchema: z.ZodType<
  AccountNameVerification$Outbound,
  z.ZodTypeDef,
  AccountNameVerification
> = z.object({
  firstName: CardVerificationResult$outboundSchema.optional(),
  lastName: CardVerificationResult$outboundSchema.optional(),
  middleName: CardVerificationResult$outboundSchema.optional(),
  fullName: CardVerificationResult$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountNameVerification$ {
  /** @deprecated use `AccountNameVerification$inboundSchema` instead. */
  export const inboundSchema = AccountNameVerification$inboundSchema;
  /** @deprecated use `AccountNameVerification$outboundSchema` instead. */
  export const outboundSchema = AccountNameVerification$outboundSchema;
  /** @deprecated use `AccountNameVerification$Outbound` instead. */
  export type Outbound = AccountNameVerification$Outbound;
}

export function accountNameVerificationToJSON(
  accountNameVerification: AccountNameVerification,
): string {
  return JSON.stringify(
    AccountNameVerification$outboundSchema.parse(accountNameVerification),
  );
}

export function accountNameVerificationFromJSON(
  jsonString: string,
): SafeParseResult<AccountNameVerification, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountNameVerification$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountNameVerification' from JSON`,
  );
}
