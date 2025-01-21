/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Specifies the nature and initiator of a transaction.
 *
 * @remarks
 *
 * Crucial for recurring and merchant-initiated transactions as per card scheme rules.
 * Omit for customer-initiated e-commerce transactions.
 */
export const TransactionSource = {
  FirstRecurring: "first-recurring",
  Recurring: "recurring",
  Unscheduled: "unscheduled",
} as const;
/**
 * Specifies the nature and initiator of a transaction.
 *
 * @remarks
 *
 * Crucial for recurring and merchant-initiated transactions as per card scheme rules.
 * Omit for customer-initiated e-commerce transactions.
 */
export type TransactionSource = ClosedEnum<typeof TransactionSource>;

/** @internal */
export const TransactionSource$inboundSchema: z.ZodNativeEnum<
  typeof TransactionSource
> = z.nativeEnum(TransactionSource);

/** @internal */
export const TransactionSource$outboundSchema: z.ZodNativeEnum<
  typeof TransactionSource
> = TransactionSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionSource$ {
  /** @deprecated use `TransactionSource$inboundSchema` instead. */
  export const inboundSchema = TransactionSource$inboundSchema;
  /** @deprecated use `TransactionSource$outboundSchema` instead. */
  export const outboundSchema = TransactionSource$outboundSchema;
}
