/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CardExpiration,
  CardExpiration$inboundSchema,
  CardExpiration$Outbound,
  CardExpiration$outboundSchema,
} from "./cardexpiration.js";
import {
  CreateAuthorizedUser,
  CreateAuthorizedUser$inboundSchema,
  CreateAuthorizedUser$Outbound,
  CreateAuthorizedUser$outboundSchema,
} from "./createauthorizeduser.js";
import {
  IssuedCardFormFactor,
  IssuedCardFormFactor$inboundSchema,
  IssuedCardFormFactor$outboundSchema,
} from "./issuedcardformfactor.js";
import {
  IssuingControls,
  IssuingControls$inboundSchema,
  IssuingControls$Outbound,
  IssuingControls$outboundSchema,
} from "./issuingcontrols.js";

export type RequestCard = {
  fundingWalletID: string;
  /**
   * Fields for identifying an authorized individual.
   */
  authorizedUser: CreateAuthorizedUser;
  /**
   * Specifies the type of spend card to be issued. Presently supports virtual only, providing a digital number without a physical card.
   */
  formFactor: IssuedCardFormFactor;
  /**
   * An optional descriptive name for the card.
   */
  memo?: string | undefined;
  /**
   * The expiration date of the card or token.
   */
  expiration?: CardExpiration | undefined;
  controls?: IssuingControls | undefined;
};

/** @internal */
export const RequestCard$inboundSchema: z.ZodType<
  RequestCard,
  z.ZodTypeDef,
  unknown
> = z.object({
  fundingWalletID: z.string(),
  authorizedUser: CreateAuthorizedUser$inboundSchema,
  formFactor: IssuedCardFormFactor$inboundSchema,
  memo: z.string().optional(),
  expiration: CardExpiration$inboundSchema.optional(),
  controls: IssuingControls$inboundSchema.optional(),
});

/** @internal */
export type RequestCard$Outbound = {
  fundingWalletID: string;
  authorizedUser: CreateAuthorizedUser$Outbound;
  formFactor: string;
  memo?: string | undefined;
  expiration?: CardExpiration$Outbound | undefined;
  controls?: IssuingControls$Outbound | undefined;
};

/** @internal */
export const RequestCard$outboundSchema: z.ZodType<
  RequestCard$Outbound,
  z.ZodTypeDef,
  RequestCard
> = z.object({
  fundingWalletID: z.string(),
  authorizedUser: CreateAuthorizedUser$outboundSchema,
  formFactor: IssuedCardFormFactor$outboundSchema,
  memo: z.string().optional(),
  expiration: CardExpiration$outboundSchema.optional(),
  controls: IssuingControls$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestCard$ {
  /** @deprecated use `RequestCard$inboundSchema` instead. */
  export const inboundSchema = RequestCard$inboundSchema;
  /** @deprecated use `RequestCard$outboundSchema` instead. */
  export const outboundSchema = RequestCard$outboundSchema;
  /** @deprecated use `RequestCard$Outbound` instead. */
  export type Outbound = RequestCard$Outbound;
}

export function requestCardToJSON(requestCard: RequestCard): string {
  return JSON.stringify(RequestCard$outboundSchema.parse(requestCard));
}

export function requestCardFromJSON(
  jsonString: string,
): SafeParseResult<RequestCard, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestCard$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestCard' from JSON`,
  );
}
