/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CardAddress = {
  addressLine1?: string | undefined;
  addressLine2?: string | undefined;
  city?: string | undefined;
  stateOrProvince?: string | undefined;
  postalCode: string;
  country?: string | undefined;
};

/** @internal */
export const CardAddress$inboundSchema: z.ZodType<
  CardAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  stateOrProvince: z.string().optional(),
  postalCode: z.string(),
  country: z.string().optional(),
});

/** @internal */
export type CardAddress$Outbound = {
  addressLine1?: string | undefined;
  addressLine2?: string | undefined;
  city?: string | undefined;
  stateOrProvince?: string | undefined;
  postalCode: string;
  country?: string | undefined;
};

/** @internal */
export const CardAddress$outboundSchema: z.ZodType<
  CardAddress$Outbound,
  z.ZodTypeDef,
  CardAddress
> = z.object({
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  stateOrProvince: z.string().optional(),
  postalCode: z.string(),
  country: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CardAddress$ {
  /** @deprecated use `CardAddress$inboundSchema` instead. */
  export const inboundSchema = CardAddress$inboundSchema;
  /** @deprecated use `CardAddress$outboundSchema` instead. */
  export const outboundSchema = CardAddress$outboundSchema;
  /** @deprecated use `CardAddress$Outbound` instead. */
  export type Outbound = CardAddress$Outbound;
}

export function cardAddressToJSON(cardAddress: CardAddress): string {
  return JSON.stringify(CardAddress$outboundSchema.parse(cardAddress));
}

export function cardAddressFromJSON(
  jsonString: string,
): SafeParseResult<CardAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CardAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CardAddress' from JSON`,
  );
}
