/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Request to complete the micro-deposit verification workflow.
 */
export type CompleteMicroDeposits = {
  /**
   * Two positive integers, in cents, equal to the values of the micro-deposits sent to the bank account.
   */
  amounts: Array<number>;
};

/** @internal */
export const CompleteMicroDeposits$inboundSchema: z.ZodType<
  CompleteMicroDeposits,
  z.ZodTypeDef,
  unknown
> = z.object({
  amounts: z.array(z.number().int()),
});

/** @internal */
export type CompleteMicroDeposits$Outbound = {
  amounts: Array<number>;
};

/** @internal */
export const CompleteMicroDeposits$outboundSchema: z.ZodType<
  CompleteMicroDeposits$Outbound,
  z.ZodTypeDef,
  CompleteMicroDeposits
> = z.object({
  amounts: z.array(z.number().int()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompleteMicroDeposits$ {
  /** @deprecated use `CompleteMicroDeposits$inboundSchema` instead. */
  export const inboundSchema = CompleteMicroDeposits$inboundSchema;
  /** @deprecated use `CompleteMicroDeposits$outboundSchema` instead. */
  export const outboundSchema = CompleteMicroDeposits$outboundSchema;
  /** @deprecated use `CompleteMicroDeposits$Outbound` instead. */
  export type Outbound = CompleteMicroDeposits$Outbound;
}

export function completeMicroDepositsToJSON(
  completeMicroDeposits: CompleteMicroDeposits,
): string {
  return JSON.stringify(
    CompleteMicroDeposits$outboundSchema.parse(completeMicroDeposits),
  );
}

export function completeMicroDepositsFromJSON(
  jsonString: string,
): SafeParseResult<CompleteMicroDeposits, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompleteMicroDeposits$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompleteMicroDeposits' from JSON`,
  );
}
