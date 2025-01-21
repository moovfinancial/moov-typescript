/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status codes for RTP failures.
 */
export const RTPFailureCode = {
  ProcessingError: "processing-error",
  InvalidAccount: "invalid-account",
  AccountClosed: "account-closed",
  AccountBlocked: "account-blocked",
  InvalidField: "invalid-field",
  TransactionNotSupported: "transaction-not-supported",
  LimitExceeded: "limit-exceeded",
  InvalidAmount: "invalid-amount",
  CustomerDeceased: "customer-deceased",
  Other: "other",
} as const;
/**
 * Status codes for RTP failures.
 */
export type RTPFailureCode = ClosedEnum<typeof RTPFailureCode>;

/** @internal */
export const RTPFailureCode$inboundSchema: z.ZodNativeEnum<
  typeof RTPFailureCode
> = z.nativeEnum(RTPFailureCode);

/** @internal */
export const RTPFailureCode$outboundSchema: z.ZodNativeEnum<
  typeof RTPFailureCode
> = RTPFailureCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RTPFailureCode$ {
  /** @deprecated use `RTPFailureCode$inboundSchema` instead. */
  export const inboundSchema = RTPFailureCode$inboundSchema;
  /** @deprecated use `RTPFailureCode$outboundSchema` instead. */
  export const outboundSchema = RTPFailureCode$outboundSchema;
}
