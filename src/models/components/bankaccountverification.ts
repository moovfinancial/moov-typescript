/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BankAccountException,
  BankAccountException$inboundSchema,
  BankAccountException$Outbound,
  BankAccountException$outboundSchema,
} from "./bankaccountexception.js";
import {
  BankAccountVerificationMethod,
  BankAccountVerificationMethod$inboundSchema,
  BankAccountVerificationMethod$outboundSchema,
} from "./bankaccountverificationmethod.js";
import {
  BankAccountVerificationStatus,
  BankAccountVerificationStatus$inboundSchema,
  BankAccountVerificationStatus$outboundSchema,
} from "./bankaccountverificationstatus.js";

export type BankAccountVerification = {
  verificationMethod: BankAccountVerificationMethod;
  status: BankAccountVerificationStatus;
  /**
   * Reason for, and details related to, an `errored` or `verificationFailed` bank account status.
   */
  exceptionDetails?: BankAccountException | undefined;
};

/** @internal */
export const BankAccountVerification$inboundSchema: z.ZodType<
  BankAccountVerification,
  z.ZodTypeDef,
  unknown
> = z.object({
  verificationMethod: BankAccountVerificationMethod$inboundSchema,
  status: BankAccountVerificationStatus$inboundSchema,
  exceptionDetails: BankAccountException$inboundSchema.optional(),
});

/** @internal */
export type BankAccountVerification$Outbound = {
  verificationMethod: string;
  status: string;
  exceptionDetails?: BankAccountException$Outbound | undefined;
};

/** @internal */
export const BankAccountVerification$outboundSchema: z.ZodType<
  BankAccountVerification$Outbound,
  z.ZodTypeDef,
  BankAccountVerification
> = z.object({
  verificationMethod: BankAccountVerificationMethod$outboundSchema,
  status: BankAccountVerificationStatus$outboundSchema,
  exceptionDetails: BankAccountException$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountVerification$ {
  /** @deprecated use `BankAccountVerification$inboundSchema` instead. */
  export const inboundSchema = BankAccountVerification$inboundSchema;
  /** @deprecated use `BankAccountVerification$outboundSchema` instead. */
  export const outboundSchema = BankAccountVerification$outboundSchema;
  /** @deprecated use `BankAccountVerification$Outbound` instead. */
  export type Outbound = BankAccountVerification$Outbound;
}

export function bankAccountVerificationToJSON(
  bankAccountVerification: BankAccountVerification,
): string {
  return JSON.stringify(
    BankAccountVerification$outboundSchema.parse(bankAccountVerification),
  );
}

export function bankAccountVerificationFromJSON(
  jsonString: string,
): SafeParseResult<BankAccountVerification, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BankAccountVerification$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BankAccountVerification' from JSON`,
  );
}
