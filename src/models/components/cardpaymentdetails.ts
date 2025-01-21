/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Options for payment links used to collect a card payment.
 */
export type CardPaymentDetails = {
  /**
   * An optional override of the default card statement descriptor for a transfer. Accounts must be enabled by Moov to set this field.
   */
  dynamicDescriptor?: string | undefined;
};

/** @internal */
export const CardPaymentDetails$inboundSchema: z.ZodType<
  CardPaymentDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  dynamicDescriptor: z.string().optional(),
});

/** @internal */
export type CardPaymentDetails$Outbound = {
  dynamicDescriptor?: string | undefined;
};

/** @internal */
export const CardPaymentDetails$outboundSchema: z.ZodType<
  CardPaymentDetails$Outbound,
  z.ZodTypeDef,
  CardPaymentDetails
> = z.object({
  dynamicDescriptor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CardPaymentDetails$ {
  /** @deprecated use `CardPaymentDetails$inboundSchema` instead. */
  export const inboundSchema = CardPaymentDetails$inboundSchema;
  /** @deprecated use `CardPaymentDetails$outboundSchema` instead. */
  export const outboundSchema = CardPaymentDetails$outboundSchema;
  /** @deprecated use `CardPaymentDetails$Outbound` instead. */
  export type Outbound = CardPaymentDetails$Outbound;
}

export function cardPaymentDetailsToJSON(
  cardPaymentDetails: CardPaymentDetails,
): string {
  return JSON.stringify(
    CardPaymentDetails$outboundSchema.parse(cardPaymentDetails),
  );
}

export function cardPaymentDetailsFromJSON(
  jsonString: string,
): SafeParseResult<CardPaymentDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CardPaymentDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CardPaymentDetails' from JSON`,
  );
}
