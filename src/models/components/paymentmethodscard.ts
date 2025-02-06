/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CardAccountUpdater,
  CardAccountUpdater$inboundSchema,
  CardAccountUpdater$Outbound,
  CardAccountUpdater$outboundSchema,
} from "./cardaccountupdater.js";
import {
  CardAddress,
  CardAddress$inboundSchema,
  CardAddress$Outbound,
  CardAddress$outboundSchema,
} from "./cardaddress.js";
import {
  CardBrand,
  CardBrand$inboundSchema,
  CardBrand$outboundSchema,
} from "./cardbrand.js";
import {
  CardExpiration,
  CardExpiration$inboundSchema,
  CardExpiration$Outbound,
  CardExpiration$outboundSchema,
} from "./cardexpiration.js";
import {
  CardType,
  CardType$inboundSchema,
  CardType$outboundSchema,
} from "./cardtype.js";
import {
  CardVerification,
  CardVerification$inboundSchema,
  CardVerification$Outbound,
  CardVerification$outboundSchema,
} from "./cardverification.js";
import {
  DomesticPullFromCard,
  DomesticPullFromCard$inboundSchema,
  DomesticPullFromCard$outboundSchema,
} from "./domesticpullfromcard.js";
import {
  DomesticPushToCard,
  DomesticPushToCard$inboundSchema,
  DomesticPushToCard$outboundSchema,
} from "./domesticpushtocard.js";

/**
 * A card as contained within a payment method.
 */
export type PaymentMethodsCard = {
  /**
   * ID of the card.
   */
  cardID: string;
  /**
   * Uniquely identifies a linked payment card or token.
   *
   * @remarks
   * For Apple Pay, the fingerprint is based on the tokenized card number and may vary based on the user's device.
   * This field can be used to identify specific payment methods across multiple accounts on your platform.
   */
  fingerprint: string;
  /**
   * The card brand.
   */
  brand: CardBrand;
  /**
   * The type of the card.
   */
  cardType: CardType;
  /**
   * Last four digits of the card number
   */
  lastFourCardNumber: string;
  /**
   * The first six to eight digits of the card number, which identifies the financial institution that issued the card.
   */
  bin: string;
  /**
   * The expiration date of the card or token.
   */
  expiration: CardExpiration;
  /**
   * The name of the cardholder as it appears on the card.
   */
  holderName: string;
  billingAddress: CardAddress;
  /**
   * The results of submitting cardholder data to a card network for verification.
   */
  cardVerification: CardVerification;
  /**
   * Financial institution that issued the card.
   */
  issuer: string;
  /**
   * Country where the card was issued.
   */
  issuerCountry: string;
  /**
   * Indicates cardholder has authorized card to be stored for future payments.
   */
  cardOnFile?: boolean | undefined;
  merchantAccountID?: string | undefined;
  /**
   * The results of the most recent card update request.
   */
  cardAccountUpdater?: CardAccountUpdater | undefined;
  /**
   * Indicates which level of domestic push-to-card transfer is supported by the card, if any.
   */
  domesticPushToCard: DomesticPushToCard;
  /**
   * Indicates if the card supports domestic pull-from-card transfer.
   */
  domesticPullFromCard: DomesticPullFromCard;
};

/** @internal */
export const PaymentMethodsCard$inboundSchema: z.ZodType<
  PaymentMethodsCard,
  z.ZodTypeDef,
  unknown
> = z.object({
  cardID: z.string(),
  fingerprint: z.string(),
  brand: CardBrand$inboundSchema,
  cardType: CardType$inboundSchema,
  lastFourCardNumber: z.string(),
  bin: z.string(),
  expiration: CardExpiration$inboundSchema,
  holderName: z.string(),
  billingAddress: CardAddress$inboundSchema,
  cardVerification: CardVerification$inboundSchema,
  issuer: z.string(),
  issuerCountry: z.string(),
  cardOnFile: z.boolean().optional(),
  merchantAccountID: z.string().optional(),
  cardAccountUpdater: CardAccountUpdater$inboundSchema.optional(),
  domesticPushToCard: DomesticPushToCard$inboundSchema,
  domesticPullFromCard: DomesticPullFromCard$inboundSchema,
});

/** @internal */
export type PaymentMethodsCard$Outbound = {
  cardID: string;
  fingerprint: string;
  brand: string;
  cardType: string;
  lastFourCardNumber: string;
  bin: string;
  expiration: CardExpiration$Outbound;
  holderName: string;
  billingAddress: CardAddress$Outbound;
  cardVerification: CardVerification$Outbound;
  issuer: string;
  issuerCountry: string;
  cardOnFile?: boolean | undefined;
  merchantAccountID?: string | undefined;
  cardAccountUpdater?: CardAccountUpdater$Outbound | undefined;
  domesticPushToCard: string;
  domesticPullFromCard: string;
};

/** @internal */
export const PaymentMethodsCard$outboundSchema: z.ZodType<
  PaymentMethodsCard$Outbound,
  z.ZodTypeDef,
  PaymentMethodsCard
> = z.object({
  cardID: z.string(),
  fingerprint: z.string(),
  brand: CardBrand$outboundSchema,
  cardType: CardType$outboundSchema,
  lastFourCardNumber: z.string(),
  bin: z.string(),
  expiration: CardExpiration$outboundSchema,
  holderName: z.string(),
  billingAddress: CardAddress$outboundSchema,
  cardVerification: CardVerification$outboundSchema,
  issuer: z.string(),
  issuerCountry: z.string(),
  cardOnFile: z.boolean().optional(),
  merchantAccountID: z.string().optional(),
  cardAccountUpdater: CardAccountUpdater$outboundSchema.optional(),
  domesticPushToCard: DomesticPushToCard$outboundSchema,
  domesticPullFromCard: DomesticPullFromCard$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodsCard$ {
  /** @deprecated use `PaymentMethodsCard$inboundSchema` instead. */
  export const inboundSchema = PaymentMethodsCard$inboundSchema;
  /** @deprecated use `PaymentMethodsCard$outboundSchema` instead. */
  export const outboundSchema = PaymentMethodsCard$outboundSchema;
  /** @deprecated use `PaymentMethodsCard$Outbound` instead. */
  export type Outbound = PaymentMethodsCard$Outbound;
}

export function paymentMethodsCardToJSON(
  paymentMethodsCard: PaymentMethodsCard,
): string {
  return JSON.stringify(
    PaymentMethodsCard$outboundSchema.parse(paymentMethodsCard),
  );
}

export function paymentMethodsCardFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethodsCard, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethodsCard$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethodsCard' from JSON`,
  );
}
