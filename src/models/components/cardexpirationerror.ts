/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CardExpirationError = {
  month?: string | undefined;
  year?: string | undefined;
};

/** @internal */
export const CardExpirationError$inboundSchema: z.ZodType<
  CardExpirationError,
  z.ZodTypeDef,
  unknown
> = z.object({
  month: z.string().optional(),
  year: z.string().optional(),
});

/** @internal */
export type CardExpirationError$Outbound = {
  month?: string | undefined;
  year?: string | undefined;
};

/** @internal */
export const CardExpirationError$outboundSchema: z.ZodType<
  CardExpirationError$Outbound,
  z.ZodTypeDef,
  CardExpirationError
> = z.object({
  month: z.string().optional(),
  year: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CardExpirationError$ {
  /** @deprecated use `CardExpirationError$inboundSchema` instead. */
  export const inboundSchema = CardExpirationError$inboundSchema;
  /** @deprecated use `CardExpirationError$outboundSchema` instead. */
  export const outboundSchema = CardExpirationError$outboundSchema;
  /** @deprecated use `CardExpirationError$Outbound` instead. */
  export type Outbound = CardExpirationError$Outbound;
}

export function cardExpirationErrorToJSON(
  cardExpirationError: CardExpirationError,
): string {
  return JSON.stringify(
    CardExpirationError$outboundSchema.parse(cardExpirationError),
  );
}

export function cardExpirationErrorFromJSON(
  jsonString: string,
): SafeParseResult<CardExpirationError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CardExpirationError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CardExpirationError' from JSON`,
  );
}
