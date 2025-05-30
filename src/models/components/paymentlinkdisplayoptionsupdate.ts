/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CallToAction,
  CallToAction$inboundSchema,
  CallToAction$outboundSchema,
} from "./calltoaction.js";

/**
 * Customizable display options for a payment link.
 */
export type PaymentLinkDisplayOptionsUpdate = {
  /**
   * The payment page title displayed to the user.
   */
  title?: string | undefined;
  /**
   * A payment description displayed to the user.
   */
  description?: string | undefined;
  /**
   * The text to be displayed on web form's submit button.
   *
   * @remarks
   *
   * If set to "auto" the UI will automatically select between
   * "pay" and "confirm" for payments and payouts respectively.
   */
  callToAction?: CallToAction | undefined;
};

/** @internal */
export const PaymentLinkDisplayOptionsUpdate$inboundSchema: z.ZodType<
  PaymentLinkDisplayOptionsUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  callToAction: CallToAction$inboundSchema.optional(),
});

/** @internal */
export type PaymentLinkDisplayOptionsUpdate$Outbound = {
  title?: string | undefined;
  description?: string | undefined;
  callToAction?: string | undefined;
};

/** @internal */
export const PaymentLinkDisplayOptionsUpdate$outboundSchema: z.ZodType<
  PaymentLinkDisplayOptionsUpdate$Outbound,
  z.ZodTypeDef,
  PaymentLinkDisplayOptionsUpdate
> = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  callToAction: CallToAction$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentLinkDisplayOptionsUpdate$ {
  /** @deprecated use `PaymentLinkDisplayOptionsUpdate$inboundSchema` instead. */
  export const inboundSchema = PaymentLinkDisplayOptionsUpdate$inboundSchema;
  /** @deprecated use `PaymentLinkDisplayOptionsUpdate$outboundSchema` instead. */
  export const outboundSchema = PaymentLinkDisplayOptionsUpdate$outboundSchema;
  /** @deprecated use `PaymentLinkDisplayOptionsUpdate$Outbound` instead. */
  export type Outbound = PaymentLinkDisplayOptionsUpdate$Outbound;
}

export function paymentLinkDisplayOptionsUpdateToJSON(
  paymentLinkDisplayOptionsUpdate: PaymentLinkDisplayOptionsUpdate,
): string {
  return JSON.stringify(
    PaymentLinkDisplayOptionsUpdate$outboundSchema.parse(
      paymentLinkDisplayOptionsUpdate,
    ),
  );
}

export function paymentLinkDisplayOptionsUpdateFromJSON(
  jsonString: string,
): SafeParseResult<PaymentLinkDisplayOptionsUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentLinkDisplayOptionsUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentLinkDisplayOptionsUpdate' from JSON`,
  );
}
