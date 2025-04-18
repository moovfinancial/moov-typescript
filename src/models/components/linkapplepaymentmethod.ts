/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 *   Provides information about the underlying card.
 *
 * @remarks
 *
 *   Refer to [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymenttoken/1916113-paymentmethod)
 *   for more information.
 */
export type LinkApplePaymentMethod = {
  /**
   * A display-friendly discription of the card.
   */
  displayName: string;
  /**
   * The card's payment network.
   */
  network: string;
  /**
   * The type of card.
   */
  type: string;
};

/** @internal */
export const LinkApplePaymentMethod$inboundSchema: z.ZodType<
  LinkApplePaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  displayName: z.string(),
  network: z.string(),
  type: z.string(),
});

/** @internal */
export type LinkApplePaymentMethod$Outbound = {
  displayName: string;
  network: string;
  type: string;
};

/** @internal */
export const LinkApplePaymentMethod$outboundSchema: z.ZodType<
  LinkApplePaymentMethod$Outbound,
  z.ZodTypeDef,
  LinkApplePaymentMethod
> = z.object({
  displayName: z.string(),
  network: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkApplePaymentMethod$ {
  /** @deprecated use `LinkApplePaymentMethod$inboundSchema` instead. */
  export const inboundSchema = LinkApplePaymentMethod$inboundSchema;
  /** @deprecated use `LinkApplePaymentMethod$outboundSchema` instead. */
  export const outboundSchema = LinkApplePaymentMethod$outboundSchema;
  /** @deprecated use `LinkApplePaymentMethod$Outbound` instead. */
  export type Outbound = LinkApplePaymentMethod$Outbound;
}

export function linkApplePaymentMethodToJSON(
  linkApplePaymentMethod: LinkApplePaymentMethod,
): string {
  return JSON.stringify(
    LinkApplePaymentMethod$outboundSchema.parse(linkApplePaymentMethod),
  );
}

export function linkApplePaymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<LinkApplePaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkApplePaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkApplePaymentMethod' from JSON`,
  );
}
