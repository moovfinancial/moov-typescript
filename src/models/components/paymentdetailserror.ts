/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ACHPaymentDetailsError,
  ACHPaymentDetailsError$inboundSchema,
  ACHPaymentDetailsError$Outbound,
  ACHPaymentDetailsError$outboundSchema,
} from "./achpaymentdetailserror.js";
import {
  CardPaymentDetailsError,
  CardPaymentDetailsError$inboundSchema,
  CardPaymentDetailsError$Outbound,
  CardPaymentDetailsError$outboundSchema,
} from "./cardpaymentdetailserror.js";

export type PaymentDetailsError = {
  allowedMethods?: string | undefined;
  cardDetails?: CardPaymentDetailsError | undefined;
  achDetails?: ACHPaymentDetailsError | undefined;
};

/** @internal */
export const PaymentDetailsError$inboundSchema: z.ZodType<
  PaymentDetailsError,
  z.ZodTypeDef,
  unknown
> = z.object({
  allowedMethods: z.string().optional(),
  cardDetails: CardPaymentDetailsError$inboundSchema.optional(),
  achDetails: ACHPaymentDetailsError$inboundSchema.optional(),
});

/** @internal */
export type PaymentDetailsError$Outbound = {
  allowedMethods?: string | undefined;
  cardDetails?: CardPaymentDetailsError$Outbound | undefined;
  achDetails?: ACHPaymentDetailsError$Outbound | undefined;
};

/** @internal */
export const PaymentDetailsError$outboundSchema: z.ZodType<
  PaymentDetailsError$Outbound,
  z.ZodTypeDef,
  PaymentDetailsError
> = z.object({
  allowedMethods: z.string().optional(),
  cardDetails: CardPaymentDetailsError$outboundSchema.optional(),
  achDetails: ACHPaymentDetailsError$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentDetailsError$ {
  /** @deprecated use `PaymentDetailsError$inboundSchema` instead. */
  export const inboundSchema = PaymentDetailsError$inboundSchema;
  /** @deprecated use `PaymentDetailsError$outboundSchema` instead. */
  export const outboundSchema = PaymentDetailsError$outboundSchema;
  /** @deprecated use `PaymentDetailsError$Outbound` instead. */
  export type Outbound = PaymentDetailsError$Outbound;
}

export function paymentDetailsErrorToJSON(
  paymentDetailsError: PaymentDetailsError,
): string {
  return JSON.stringify(
    PaymentDetailsError$outboundSchema.parse(paymentDetailsError),
  );
}

export function paymentDetailsErrorFromJSON(
  jsonString: string,
): SafeParseResult<PaymentDetailsError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentDetailsError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentDetailsError' from JSON`,
  );
}
