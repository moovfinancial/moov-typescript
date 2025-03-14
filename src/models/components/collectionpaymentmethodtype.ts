/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Payment methods allowed for collecting a payment.
 */
export const CollectionPaymentMethodType = {
  ApplePay: "apple-pay",
  CardPayment: "card-payment",
  AchDebitCollect: "ach-debit-collect",
} as const;
/**
 * Payment methods allowed for collecting a payment.
 */
export type CollectionPaymentMethodType = ClosedEnum<
  typeof CollectionPaymentMethodType
>;

/** @internal */
export const CollectionPaymentMethodType$inboundSchema: z.ZodNativeEnum<
  typeof CollectionPaymentMethodType
> = z.nativeEnum(CollectionPaymentMethodType);

/** @internal */
export const CollectionPaymentMethodType$outboundSchema: z.ZodNativeEnum<
  typeof CollectionPaymentMethodType
> = CollectionPaymentMethodType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollectionPaymentMethodType$ {
  /** @deprecated use `CollectionPaymentMethodType$inboundSchema` instead. */
  export const inboundSchema = CollectionPaymentMethodType$inboundSchema;
  /** @deprecated use `CollectionPaymentMethodType$outboundSchema` instead. */
  export const outboundSchema = CollectionPaymentMethodType$outboundSchema;
}
