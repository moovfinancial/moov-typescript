/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AuthorizedUser,
  AuthorizedUser$inboundSchema,
  AuthorizedUser$Outbound,
  AuthorizedUser$outboundSchema,
} from "./authorizeduser.js";
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
  IssuedCardFormFactor,
  IssuedCardFormFactor$inboundSchema,
  IssuedCardFormFactor$outboundSchema,
} from "./issuedcardformfactor.js";
import {
  IssuedCardState,
  IssuedCardState$inboundSchema,
  IssuedCardState$outboundSchema,
} from "./issuedcardstate.js";
import {
  IssuingControls,
  IssuingControls$inboundSchema,
  IssuingControls$Outbound,
  IssuingControls$outboundSchema,
} from "./issuingcontrols.js";

/**
 * The full details of an issued card, including PAN and CVV.
 */
export type FullIssuedCard = {
  issuedCardID: string;
  /**
   * The card brand.
   */
  brand: CardBrand;
  lastFourCardNumber: string;
  /**
   * The expiration date of the card or token.
   */
  expiration: CardExpiration;
  /**
   * Fields for identifying an authorized individual.
   */
  authorizedUser: AuthorizedUser;
  /**
   * Optional descriptor for the card.
   */
  memo?: string | undefined;
  /**
   * Unique identifier for the wallet funding the card.
   */
  fundingWalletID: string;
  /**
   * The `state` represents the operational status of an issued card. A card can only approve incoming authorizations if it is in an active state.
   *
   * @remarks
   *
   * - `active`: The card is operational and approves authorizations. Generally becomes active shortly after card creation.
   * - `inactive`: The card cannot approve authorizations. This is currently a temporary state assigned post-creation during the activation process.
   * - `closed`: The card is permanently deactivated and cannot approve authorizations. A card can be closed by request or when it expires.
   * - `pending-verification`: Awaiting additional authorized user verification before the card can be activated.
   */
  state: IssuedCardState;
  /**
   * Specifies the type of spend card to be issued. Presently supports virtual only, providing a digital number without a physical card.
   */
  formFactor: IssuedCardFormFactor;
  controls?: IssuingControls | undefined;
  createdOn: Date;
  /**
   * The issued card's Primary Account Number (PAN)
   */
  pan: string;
  /**
   * The issued card's 3- or 4-digit Card Verification Value (CVV).
   */
  cvv: string;
};

/** @internal */
export const FullIssuedCard$inboundSchema: z.ZodType<
  FullIssuedCard,
  z.ZodTypeDef,
  unknown
> = z.object({
  issuedCardID: z.string(),
  brand: CardBrand$inboundSchema,
  lastFourCardNumber: z.string(),
  expiration: CardExpiration$inboundSchema,
  authorizedUser: AuthorizedUser$inboundSchema,
  memo: z.string().optional(),
  fundingWalletID: z.string(),
  state: IssuedCardState$inboundSchema,
  formFactor: IssuedCardFormFactor$inboundSchema,
  controls: IssuingControls$inboundSchema.optional(),
  createdOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  pan: z.string(),
  cvv: z.string(),
});

/** @internal */
export type FullIssuedCard$Outbound = {
  issuedCardID: string;
  brand: string;
  lastFourCardNumber: string;
  expiration: CardExpiration$Outbound;
  authorizedUser: AuthorizedUser$Outbound;
  memo?: string | undefined;
  fundingWalletID: string;
  state: string;
  formFactor: string;
  controls?: IssuingControls$Outbound | undefined;
  createdOn: string;
  pan: string;
  cvv: string;
};

/** @internal */
export const FullIssuedCard$outboundSchema: z.ZodType<
  FullIssuedCard$Outbound,
  z.ZodTypeDef,
  FullIssuedCard
> = z.object({
  issuedCardID: z.string(),
  brand: CardBrand$outboundSchema,
  lastFourCardNumber: z.string(),
  expiration: CardExpiration$outboundSchema,
  authorizedUser: AuthorizedUser$outboundSchema,
  memo: z.string().optional(),
  fundingWalletID: z.string(),
  state: IssuedCardState$outboundSchema,
  formFactor: IssuedCardFormFactor$outboundSchema,
  controls: IssuingControls$outboundSchema.optional(),
  createdOn: z.date().transform(v => v.toISOString()),
  pan: z.string(),
  cvv: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FullIssuedCard$ {
  /** @deprecated use `FullIssuedCard$inboundSchema` instead. */
  export const inboundSchema = FullIssuedCard$inboundSchema;
  /** @deprecated use `FullIssuedCard$outboundSchema` instead. */
  export const outboundSchema = FullIssuedCard$outboundSchema;
  /** @deprecated use `FullIssuedCard$Outbound` instead. */
  export type Outbound = FullIssuedCard$Outbound;
}

export function fullIssuedCardToJSON(fullIssuedCard: FullIssuedCard): string {
  return JSON.stringify(FullIssuedCard$outboundSchema.parse(fullIssuedCard));
}

export function fullIssuedCardFromJSON(
  jsonString: string,
): SafeParseResult<FullIssuedCard, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FullIssuedCard$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FullIssuedCard' from JSON`,
  );
}
