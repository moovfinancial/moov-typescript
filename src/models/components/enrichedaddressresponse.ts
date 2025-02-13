/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressSuggestion,
  AddressSuggestion$inboundSchema,
  AddressSuggestion$Outbound,
  AddressSuggestion$outboundSchema,
} from "./addresssuggestion.js";

export type EnrichedAddressResponse = {
  suggestions: Array<AddressSuggestion>;
};

/** @internal */
export const EnrichedAddressResponse$inboundSchema: z.ZodType<
  EnrichedAddressResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  suggestions: z.array(AddressSuggestion$inboundSchema),
});

/** @internal */
export type EnrichedAddressResponse$Outbound = {
  suggestions: Array<AddressSuggestion$Outbound>;
};

/** @internal */
export const EnrichedAddressResponse$outboundSchema: z.ZodType<
  EnrichedAddressResponse$Outbound,
  z.ZodTypeDef,
  EnrichedAddressResponse
> = z.object({
  suggestions: z.array(AddressSuggestion$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrichedAddressResponse$ {
  /** @deprecated use `EnrichedAddressResponse$inboundSchema` instead. */
  export const inboundSchema = EnrichedAddressResponse$inboundSchema;
  /** @deprecated use `EnrichedAddressResponse$outboundSchema` instead. */
  export const outboundSchema = EnrichedAddressResponse$outboundSchema;
  /** @deprecated use `EnrichedAddressResponse$Outbound` instead. */
  export type Outbound = EnrichedAddressResponse$Outbound;
}

export function enrichedAddressResponseToJSON(
  enrichedAddressResponse: EnrichedAddressResponse,
): string {
  return JSON.stringify(
    EnrichedAddressResponse$outboundSchema.parse(enrichedAddressResponse),
  );
}

export function enrichedAddressResponseFromJSON(
  jsonString: string,
): SafeParseResult<EnrichedAddressResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnrichedAddressResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnrichedAddressResponse' from JSON`,
  );
}
