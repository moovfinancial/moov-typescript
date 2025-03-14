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

export const RtpCreditPaymentMethodPaymentMethodType = {
  RtpCredit: "rtp-credit",
} as const;
export type RtpCreditPaymentMethodPaymentMethodType = ClosedEnum<
  typeof RtpCreditPaymentMethodPaymentMethodType
>;

export type RtpCreditPaymentMethod = {
  /**
   * ID of the payment method.
   */
  paymentMethodID: string;
  paymentMethodType: RtpCreditPaymentMethodPaymentMethodType;
  /**
   * A bank account as contained within a payment method.
   */
  bankAccount: PaymentMethodsBankAccount;
};

/** @internal */
export const RtpCreditPaymentMethodPaymentMethodType$inboundSchema:
  z.ZodNativeEnum<typeof RtpCreditPaymentMethodPaymentMethodType> = z
    .nativeEnum(RtpCreditPaymentMethodPaymentMethodType);

/** @internal */
export const RtpCreditPaymentMethodPaymentMethodType$outboundSchema:
  z.ZodNativeEnum<typeof RtpCreditPaymentMethodPaymentMethodType> =
    RtpCreditPaymentMethodPaymentMethodType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RtpCreditPaymentMethodPaymentMethodType$ {
  /** @deprecated use `RtpCreditPaymentMethodPaymentMethodType$inboundSchema` instead. */
  export const inboundSchema =
    RtpCreditPaymentMethodPaymentMethodType$inboundSchema;
  /** @deprecated use `RtpCreditPaymentMethodPaymentMethodType$outboundSchema` instead. */
  export const outboundSchema =
    RtpCreditPaymentMethodPaymentMethodType$outboundSchema;
}

/** @internal */
export const RtpCreditPaymentMethod$inboundSchema: z.ZodType<
  RtpCreditPaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType: RtpCreditPaymentMethodPaymentMethodType$inboundSchema,
  bankAccount: PaymentMethodsBankAccount$inboundSchema,
});

/** @internal */
export type RtpCreditPaymentMethod$Outbound = {
  paymentMethodID: string;
  paymentMethodType: string;
  bankAccount: PaymentMethodsBankAccount$Outbound;
};

/** @internal */
export const RtpCreditPaymentMethod$outboundSchema: z.ZodType<
  RtpCreditPaymentMethod$Outbound,
  z.ZodTypeDef,
  RtpCreditPaymentMethod
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType: RtpCreditPaymentMethodPaymentMethodType$outboundSchema,
  bankAccount: PaymentMethodsBankAccount$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RtpCreditPaymentMethod$ {
  /** @deprecated use `RtpCreditPaymentMethod$inboundSchema` instead. */
  export const inboundSchema = RtpCreditPaymentMethod$inboundSchema;
  /** @deprecated use `RtpCreditPaymentMethod$outboundSchema` instead. */
  export const outboundSchema = RtpCreditPaymentMethod$outboundSchema;
  /** @deprecated use `RtpCreditPaymentMethod$Outbound` instead. */
  export type Outbound = RtpCreditPaymentMethod$Outbound;
}

export function rtpCreditPaymentMethodToJSON(
  rtpCreditPaymentMethod: RtpCreditPaymentMethod,
): string {
  return JSON.stringify(
    RtpCreditPaymentMethod$outboundSchema.parse(rtpCreditPaymentMethod),
  );
}

export function rtpCreditPaymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<RtpCreditPaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RtpCreditPaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RtpCreditPaymentMethod' from JSON`,
  );
}
