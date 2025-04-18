/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AchCreditSameDayPaymentMethod,
  AchCreditSameDayPaymentMethod$inboundSchema,
  AchCreditSameDayPaymentMethod$Outbound,
  AchCreditSameDayPaymentMethod$outboundSchema,
} from "./achcreditsamedaypaymentmethod.js";
import {
  AchCreditStandardPaymentMethod,
  AchCreditStandardPaymentMethod$inboundSchema,
  AchCreditStandardPaymentMethod$Outbound,
  AchCreditStandardPaymentMethod$outboundSchema,
} from "./achcreditstandardpaymentmethod.js";
import {
  AchDebitCollectPaymentMethod,
  AchDebitCollectPaymentMethod$inboundSchema,
  AchDebitCollectPaymentMethod$Outbound,
  AchDebitCollectPaymentMethod$outboundSchema,
} from "./achdebitcollectpaymentmethod.js";
import {
  AchDebitFundPaymentMethod,
  AchDebitFundPaymentMethod$inboundSchema,
  AchDebitFundPaymentMethod$Outbound,
  AchDebitFundPaymentMethod$outboundSchema,
} from "./achdebitfundpaymentmethod.js";
import {
  ApplePayPaymentMethod,
  ApplePayPaymentMethod$inboundSchema,
  ApplePayPaymentMethod$Outbound,
  ApplePayPaymentMethod$outboundSchema,
} from "./applepaypaymentmethod.js";
import {
  CardPaymentPaymentMethod,
  CardPaymentPaymentMethod$inboundSchema,
  CardPaymentPaymentMethod$Outbound,
  CardPaymentPaymentMethod$outboundSchema,
} from "./cardpaymentpaymentmethod.js";
import {
  CardPresentPaymentPaymentMethod,
  CardPresentPaymentPaymentMethod$inboundSchema,
  CardPresentPaymentPaymentMethod$Outbound,
  CardPresentPaymentPaymentMethod$outboundSchema,
} from "./cardpresentpaymentpaymentmethod.js";
import {
  MoovWalletPaymentMethod,
  MoovWalletPaymentMethod$inboundSchema,
  MoovWalletPaymentMethod$Outbound,
  MoovWalletPaymentMethod$outboundSchema,
} from "./moovwalletpaymentmethod.js";
import {
  PullFromCardPaymentMethod,
  PullFromCardPaymentMethod$inboundSchema,
  PullFromCardPaymentMethod$Outbound,
  PullFromCardPaymentMethod$outboundSchema,
} from "./pullfromcardpaymentmethod.js";
import {
  PushToCardPaymentMethod,
  PushToCardPaymentMethod$inboundSchema,
  PushToCardPaymentMethod$Outbound,
  PushToCardPaymentMethod$outboundSchema,
} from "./pushtocardpaymentmethod.js";
import {
  RtpCreditPaymentMethod,
  RtpCreditPaymentMethod$inboundSchema,
  RtpCreditPaymentMethod$Outbound,
  RtpCreditPaymentMethod$outboundSchema,
} from "./rtpcreditpaymentmethod.js";

/**
 * A method of moving money
 */
export type PaymentMethod =
  | (MoovWalletPaymentMethod & { paymentMethodType: "moov-wallet" })
  | (AchDebitFundPaymentMethod & { paymentMethodType: "ach-debit-fund" })
  | (AchDebitCollectPaymentMethod & { paymentMethodType: "ach-debit-collect" })
  | (AchCreditStandardPaymentMethod & {
    paymentMethodType: "ach-credit-standard";
  })
  | (AchCreditSameDayPaymentMethod & {
    paymentMethodType: "ach-credit-same-day";
  })
  | (RtpCreditPaymentMethod & { paymentMethodType: "rtp-credit" })
  | (CardPaymentPaymentMethod & { paymentMethodType: "card-payment" })
  | (PushToCardPaymentMethod & { paymentMethodType: "push-to-card" })
  | (PullFromCardPaymentMethod & { paymentMethodType: "pull-from-card" })
  | (ApplePayPaymentMethod & { paymentMethodType: "apple-pay" })
  | (CardPresentPaymentPaymentMethod & {
    paymentMethodType: "card-present-payment";
  });

/** @internal */
export const PaymentMethod$inboundSchema: z.ZodType<
  PaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.union([
  MoovWalletPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("moov-wallet") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  AchDebitFundPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-debit-fund") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  AchDebitCollectPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-debit-collect") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  AchCreditStandardPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-credit-standard") }).transform(
      (v) => ({ paymentMethodType: v.paymentMethodType })
    ),
  ),
  AchCreditSameDayPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-credit-same-day") }).transform(
      (v) => ({ paymentMethodType: v.paymentMethodType })
    ),
  ),
  RtpCreditPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("rtp-credit") }).transform((v) => ({
      paymentMethodType: v.paymentMethodType,
    })),
  ),
  CardPaymentPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("card-payment") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  PushToCardPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("push-to-card") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  PullFromCardPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("pull-from-card") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  ApplePayPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("apple-pay") }).transform((v) => ({
      paymentMethodType: v.paymentMethodType,
    })),
  ),
  CardPresentPaymentPaymentMethod$inboundSchema.and(
    z.object({ paymentMethodType: z.literal("card-present-payment") })
      .transform((v) => ({ paymentMethodType: v.paymentMethodType })),
  ),
]);

/** @internal */
export type PaymentMethod$Outbound =
  | (MoovWalletPaymentMethod$Outbound & { paymentMethodType: "moov-wallet" })
  | (AchDebitFundPaymentMethod$Outbound & {
    paymentMethodType: "ach-debit-fund";
  })
  | (AchDebitCollectPaymentMethod$Outbound & {
    paymentMethodType: "ach-debit-collect";
  })
  | (AchCreditStandardPaymentMethod$Outbound & {
    paymentMethodType: "ach-credit-standard";
  })
  | (AchCreditSameDayPaymentMethod$Outbound & {
    paymentMethodType: "ach-credit-same-day";
  })
  | (RtpCreditPaymentMethod$Outbound & { paymentMethodType: "rtp-credit" })
  | (CardPaymentPaymentMethod$Outbound & { paymentMethodType: "card-payment" })
  | (PushToCardPaymentMethod$Outbound & { paymentMethodType: "push-to-card" })
  | (PullFromCardPaymentMethod$Outbound & {
    paymentMethodType: "pull-from-card";
  })
  | (ApplePayPaymentMethod$Outbound & { paymentMethodType: "apple-pay" })
  | (CardPresentPaymentPaymentMethod$Outbound & {
    paymentMethodType: "card-present-payment";
  });

/** @internal */
export const PaymentMethod$outboundSchema: z.ZodType<
  PaymentMethod$Outbound,
  z.ZodTypeDef,
  PaymentMethod
> = z.union([
  MoovWalletPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("moov-wallet") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  AchDebitFundPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-debit-fund") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  AchDebitCollectPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-debit-collect") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  AchCreditStandardPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-credit-standard") }).transform(
      (v) => ({ paymentMethodType: v.paymentMethodType })
    ),
  ),
  AchCreditSameDayPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("ach-credit-same-day") }).transform(
      (v) => ({ paymentMethodType: v.paymentMethodType })
    ),
  ),
  RtpCreditPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("rtp-credit") }).transform((v) => ({
      paymentMethodType: v.paymentMethodType,
    })),
  ),
  CardPaymentPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("card-payment") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  PushToCardPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("push-to-card") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  PullFromCardPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("pull-from-card") }).transform((
      v,
    ) => ({ paymentMethodType: v.paymentMethodType })),
  ),
  ApplePayPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("apple-pay") }).transform((v) => ({
      paymentMethodType: v.paymentMethodType,
    })),
  ),
  CardPresentPaymentPaymentMethod$outboundSchema.and(
    z.object({ paymentMethodType: z.literal("card-present-payment") })
      .transform((v) => ({ paymentMethodType: v.paymentMethodType })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethod$ {
  /** @deprecated use `PaymentMethod$inboundSchema` instead. */
  export const inboundSchema = PaymentMethod$inboundSchema;
  /** @deprecated use `PaymentMethod$outboundSchema` instead. */
  export const outboundSchema = PaymentMethod$outboundSchema;
  /** @deprecated use `PaymentMethod$Outbound` instead. */
  export type Outbound = PaymentMethod$Outbound;
}

export function paymentMethodToJSON(paymentMethod: PaymentMethod): string {
  return JSON.stringify(PaymentMethod$outboundSchema.parse(paymentMethod));
}

export function paymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethod' from JSON`,
  );
}
