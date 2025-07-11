/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CollectFundsAchError,
  CollectFundsAchError$inboundSchema,
  CollectFundsAchError$Outbound,
  CollectFundsAchError$outboundSchema,
} from "./collectfundsacherror.js";
import {
  CollectFundsCardPaymentsError,
  CollectFundsCardPaymentsError$inboundSchema,
  CollectFundsCardPaymentsError$Outbound,
  CollectFundsCardPaymentsError$outboundSchema,
} from "./collectfundscardpaymentserror.js";

export type CollectFundsError = {
  ach?: CollectFundsAchError | undefined;
  cardPayments?: CollectFundsCardPaymentsError | undefined;
};

/** @internal */
export const CollectFundsError$inboundSchema: z.ZodType<
  CollectFundsError,
  z.ZodTypeDef,
  unknown
> = z.object({
  ach: CollectFundsAchError$inboundSchema.optional(),
  cardPayments: CollectFundsCardPaymentsError$inboundSchema.optional(),
});

/** @internal */
export type CollectFundsError$Outbound = {
  ach?: CollectFundsAchError$Outbound | undefined;
  cardPayments?: CollectFundsCardPaymentsError$Outbound | undefined;
};

/** @internal */
export const CollectFundsError$outboundSchema: z.ZodType<
  CollectFundsError$Outbound,
  z.ZodTypeDef,
  CollectFundsError
> = z.object({
  ach: CollectFundsAchError$outboundSchema.optional(),
  cardPayments: CollectFundsCardPaymentsError$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollectFundsError$ {
  /** @deprecated use `CollectFundsError$inboundSchema` instead. */
  export const inboundSchema = CollectFundsError$inboundSchema;
  /** @deprecated use `CollectFundsError$outboundSchema` instead. */
  export const outboundSchema = CollectFundsError$outboundSchema;
  /** @deprecated use `CollectFundsError$Outbound` instead. */
  export type Outbound = CollectFundsError$Outbound;
}

export function collectFundsErrorToJSON(
  collectFundsError: CollectFundsError,
): string {
  return JSON.stringify(
    CollectFundsError$outboundSchema.parse(collectFundsError),
  );
}

export function collectFundsErrorFromJSON(
  jsonString: string,
): SafeParseResult<CollectFundsError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CollectFundsError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollectFundsError' from JSON`,
  );
}
