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

export const AchDebitCollectPaymentMethodPaymentMethodType = {
  AchDebitCollect: "ach-debit-collect",
} as const;
export type AchDebitCollectPaymentMethodPaymentMethodType = ClosedEnum<
  typeof AchDebitCollectPaymentMethodPaymentMethodType
>;

export type AchDebitCollectPaymentMethod = {
  /**
   * ID of the payment method.
   */
  paymentMethodID: string;
  paymentMethodType: AchDebitCollectPaymentMethodPaymentMethodType;
  /**
   * A bank account as contained within a payment method.
   */
  bankAccount: PaymentMethodsBankAccount;
};

/** @internal */
export const AchDebitCollectPaymentMethodPaymentMethodType$inboundSchema:
  z.ZodNativeEnum<typeof AchDebitCollectPaymentMethodPaymentMethodType> = z
    .nativeEnum(AchDebitCollectPaymentMethodPaymentMethodType);

/** @internal */
export const AchDebitCollectPaymentMethodPaymentMethodType$outboundSchema:
  z.ZodNativeEnum<typeof AchDebitCollectPaymentMethodPaymentMethodType> =
    AchDebitCollectPaymentMethodPaymentMethodType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDebitCollectPaymentMethodPaymentMethodType$ {
  /** @deprecated use `AchDebitCollectPaymentMethodPaymentMethodType$inboundSchema` instead. */
  export const inboundSchema =
    AchDebitCollectPaymentMethodPaymentMethodType$inboundSchema;
  /** @deprecated use `AchDebitCollectPaymentMethodPaymentMethodType$outboundSchema` instead. */
  export const outboundSchema =
    AchDebitCollectPaymentMethodPaymentMethodType$outboundSchema;
}

/** @internal */
export const AchDebitCollectPaymentMethod$inboundSchema: z.ZodType<
  AchDebitCollectPaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType:
    AchDebitCollectPaymentMethodPaymentMethodType$inboundSchema,
  bankAccount: PaymentMethodsBankAccount$inboundSchema,
});

/** @internal */
export type AchDebitCollectPaymentMethod$Outbound = {
  paymentMethodID: string;
  paymentMethodType: string;
  bankAccount: PaymentMethodsBankAccount$Outbound;
};

/** @internal */
export const AchDebitCollectPaymentMethod$outboundSchema: z.ZodType<
  AchDebitCollectPaymentMethod$Outbound,
  z.ZodTypeDef,
  AchDebitCollectPaymentMethod
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType:
    AchDebitCollectPaymentMethodPaymentMethodType$outboundSchema,
  bankAccount: PaymentMethodsBankAccount$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDebitCollectPaymentMethod$ {
  /** @deprecated use `AchDebitCollectPaymentMethod$inboundSchema` instead. */
  export const inboundSchema = AchDebitCollectPaymentMethod$inboundSchema;
  /** @deprecated use `AchDebitCollectPaymentMethod$outboundSchema` instead. */
  export const outboundSchema = AchDebitCollectPaymentMethod$outboundSchema;
  /** @deprecated use `AchDebitCollectPaymentMethod$Outbound` instead. */
  export type Outbound = AchDebitCollectPaymentMethod$Outbound;
}

export function achDebitCollectPaymentMethodToJSON(
  achDebitCollectPaymentMethod: AchDebitCollectPaymentMethod,
): string {
  return JSON.stringify(
    AchDebitCollectPaymentMethod$outboundSchema.parse(
      achDebitCollectPaymentMethod,
    ),
  );
}

export function achDebitCollectPaymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<AchDebitCollectPaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AchDebitCollectPaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AchDebitCollectPaymentMethod' from JSON`,
  );
}
