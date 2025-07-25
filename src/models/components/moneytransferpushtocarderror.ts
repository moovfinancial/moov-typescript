/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EstimatedActivityError,
  EstimatedActivityError$inboundSchema,
  EstimatedActivityError$Outbound,
  EstimatedActivityError$outboundSchema,
} from "./estimatedactivityerror.js";

export type MoneyTransferPushToCardError = {
  estimatedActivity?: EstimatedActivityError | undefined;
};

/** @internal */
export const MoneyTransferPushToCardError$inboundSchema: z.ZodType<
  MoneyTransferPushToCardError,
  z.ZodTypeDef,
  unknown
> = z.object({
  estimatedActivity: EstimatedActivityError$inboundSchema.optional(),
});

/** @internal */
export type MoneyTransferPushToCardError$Outbound = {
  estimatedActivity?: EstimatedActivityError$Outbound | undefined;
};

/** @internal */
export const MoneyTransferPushToCardError$outboundSchema: z.ZodType<
  MoneyTransferPushToCardError$Outbound,
  z.ZodTypeDef,
  MoneyTransferPushToCardError
> = z.object({
  estimatedActivity: EstimatedActivityError$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MoneyTransferPushToCardError$ {
  /** @deprecated use `MoneyTransferPushToCardError$inboundSchema` instead. */
  export const inboundSchema = MoneyTransferPushToCardError$inboundSchema;
  /** @deprecated use `MoneyTransferPushToCardError$outboundSchema` instead. */
  export const outboundSchema = MoneyTransferPushToCardError$outboundSchema;
  /** @deprecated use `MoneyTransferPushToCardError$Outbound` instead. */
  export type Outbound = MoneyTransferPushToCardError$Outbound;
}

export function moneyTransferPushToCardErrorToJSON(
  moneyTransferPushToCardError: MoneyTransferPushToCardError,
): string {
  return JSON.stringify(
    MoneyTransferPushToCardError$outboundSchema.parse(
      moneyTransferPushToCardError,
    ),
  );
}

export function moneyTransferPushToCardErrorFromJSON(
  jsonString: string,
): SafeParseResult<MoneyTransferPushToCardError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MoneyTransferPushToCardError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MoneyTransferPushToCardError' from JSON`,
  );
}
