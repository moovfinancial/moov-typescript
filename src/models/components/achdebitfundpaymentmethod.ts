/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentMethodsBankAccount,
  PaymentMethodsBankAccount$inboundSchema,
  PaymentMethodsBankAccount$Outbound,
  PaymentMethodsBankAccount$outboundSchema,
} from "./paymentmethodsbankaccount.js";

export const AchDebitFundPaymentMethodPaymentMethodType = {
  AchDebitFund: "ach-debit-fund",
} as const;
export type AchDebitFundPaymentMethodPaymentMethodType = ClosedEnum<
  typeof AchDebitFundPaymentMethodPaymentMethodType
>;

export type AchDebitFundPaymentMethod = {
  /**
   * ID of the payment method.
   */
  paymentMethodID: string;
  paymentMethodType: AchDebitFundPaymentMethodPaymentMethodType;
  /**
   * A bank account as contained within a payment method.
   */
  bankAccount: PaymentMethodsBankAccount;
};

/** @internal */
export const AchDebitFundPaymentMethodPaymentMethodType$inboundSchema:
  z.ZodNativeEnum<typeof AchDebitFundPaymentMethodPaymentMethodType> = z
    .nativeEnum(AchDebitFundPaymentMethodPaymentMethodType);

/** @internal */
export const AchDebitFundPaymentMethodPaymentMethodType$outboundSchema:
  z.ZodNativeEnum<typeof AchDebitFundPaymentMethodPaymentMethodType> =
    AchDebitFundPaymentMethodPaymentMethodType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDebitFundPaymentMethodPaymentMethodType$ {
  /** @deprecated use `AchDebitFundPaymentMethodPaymentMethodType$inboundSchema` instead. */
  export const inboundSchema =
    AchDebitFundPaymentMethodPaymentMethodType$inboundSchema;
  /** @deprecated use `AchDebitFundPaymentMethodPaymentMethodType$outboundSchema` instead. */
  export const outboundSchema =
    AchDebitFundPaymentMethodPaymentMethodType$outboundSchema;
}

/** @internal */
export const AchDebitFundPaymentMethod$inboundSchema: z.ZodType<
  AchDebitFundPaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType: AchDebitFundPaymentMethodPaymentMethodType$inboundSchema,
  bankAccount: PaymentMethodsBankAccount$inboundSchema,
});

/** @internal */
export type AchDebitFundPaymentMethod$Outbound = {
  paymentMethodID: string;
  paymentMethodType: string;
  bankAccount: PaymentMethodsBankAccount$Outbound;
};

/** @internal */
export const AchDebitFundPaymentMethod$outboundSchema: z.ZodType<
  AchDebitFundPaymentMethod$Outbound,
  z.ZodTypeDef,
  AchDebitFundPaymentMethod
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType: AchDebitFundPaymentMethodPaymentMethodType$outboundSchema,
  bankAccount: PaymentMethodsBankAccount$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDebitFundPaymentMethod$ {
  /** @deprecated use `AchDebitFundPaymentMethod$inboundSchema` instead. */
  export const inboundSchema = AchDebitFundPaymentMethod$inboundSchema;
  /** @deprecated use `AchDebitFundPaymentMethod$outboundSchema` instead. */
  export const outboundSchema = AchDebitFundPaymentMethod$outboundSchema;
  /** @deprecated use `AchDebitFundPaymentMethod$Outbound` instead. */
  export type Outbound = AchDebitFundPaymentMethod$Outbound;
}

export function achDebitFundPaymentMethodToJSON(
  achDebitFundPaymentMethod: AchDebitFundPaymentMethod,
): string {
  return JSON.stringify(
    AchDebitFundPaymentMethod$outboundSchema.parse(achDebitFundPaymentMethod),
  );
}

export function achDebitFundPaymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<AchDebitFundPaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AchDebitFundPaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AchDebitFundPaymentMethod' from JSON`,
  );
}
