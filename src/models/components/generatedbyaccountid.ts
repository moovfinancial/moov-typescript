/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GeneratedByAccountID = {
  accountID?: string | undefined;
};

/** @internal */
export const GeneratedByAccountID$inboundSchema: z.ZodType<
  GeneratedByAccountID,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountID: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "AccountID": "accountID",
  });
});

/** @internal */
export type GeneratedByAccountID$Outbound = {
  AccountID?: string | undefined;
};

/** @internal */
export const GeneratedByAccountID$outboundSchema: z.ZodType<
  GeneratedByAccountID$Outbound,
  z.ZodTypeDef,
  GeneratedByAccountID
> = z.object({
  accountID: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    accountID: "AccountID",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratedByAccountID$ {
  /** @deprecated use `GeneratedByAccountID$inboundSchema` instead. */
  export const inboundSchema = GeneratedByAccountID$inboundSchema;
  /** @deprecated use `GeneratedByAccountID$outboundSchema` instead. */
  export const outboundSchema = GeneratedByAccountID$outboundSchema;
  /** @deprecated use `GeneratedByAccountID$Outbound` instead. */
  export type Outbound = GeneratedByAccountID$Outbound;
}

export function generatedByAccountIDToJSON(
  generatedByAccountID: GeneratedByAccountID,
): string {
  return JSON.stringify(
    GeneratedByAccountID$outboundSchema.parse(generatedByAccountID),
  );
}

export function generatedByAccountIDFromJSON(
  jsonString: string,
): SafeParseResult<GeneratedByAccountID, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GeneratedByAccountID$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GeneratedByAccountID' from JSON`,
  );
}
