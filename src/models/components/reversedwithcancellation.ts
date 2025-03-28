/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Cancellation,
  Cancellation$inboundSchema,
  Cancellation$Outbound,
  Cancellation$outboundSchema,
} from "./cancellation.js";

export type ReversedWithCancellation = {
  cancellation: Cancellation;
};

/** @internal */
export const ReversedWithCancellation$inboundSchema: z.ZodType<
  ReversedWithCancellation,
  z.ZodTypeDef,
  unknown
> = z.object({
  cancellation: Cancellation$inboundSchema,
});

/** @internal */
export type ReversedWithCancellation$Outbound = {
  cancellation: Cancellation$Outbound;
};

/** @internal */
export const ReversedWithCancellation$outboundSchema: z.ZodType<
  ReversedWithCancellation$Outbound,
  z.ZodTypeDef,
  ReversedWithCancellation
> = z.object({
  cancellation: Cancellation$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReversedWithCancellation$ {
  /** @deprecated use `ReversedWithCancellation$inboundSchema` instead. */
  export const inboundSchema = ReversedWithCancellation$inboundSchema;
  /** @deprecated use `ReversedWithCancellation$outboundSchema` instead. */
  export const outboundSchema = ReversedWithCancellation$outboundSchema;
  /** @deprecated use `ReversedWithCancellation$Outbound` instead. */
  export type Outbound = ReversedWithCancellation$Outbound;
}

export function reversedWithCancellationToJSON(
  reversedWithCancellation: ReversedWithCancellation,
): string {
  return JSON.stringify(
    ReversedWithCancellation$outboundSchema.parse(reversedWithCancellation),
  );
}

export function reversedWithCancellationFromJSON(
  jsonString: string,
): SafeParseResult<ReversedWithCancellation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReversedWithCancellation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReversedWithCancellation' from JSON`,
  );
}
