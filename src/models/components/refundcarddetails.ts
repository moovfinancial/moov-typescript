/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CardTransactionFailureCode,
  CardTransactionFailureCode$inboundSchema,
  CardTransactionFailureCode$outboundSchema,
} from "./cardtransactionfailurecode.js";
import {
  RefundCardStatus,
  RefundCardStatus$inboundSchema,
  RefundCardStatus$outboundSchema,
} from "./refundcardstatus.js";

export type RefundCardDetails = {
  status: RefundCardStatus;
  failureCode?: CardTransactionFailureCode | undefined;
  initiatedOn?: Date | undefined;
  confirmedOn?: Date | undefined;
  settledOn?: Date | undefined;
  failedOn?: Date | undefined;
  completedOn?: Date | undefined;
};

/** @internal */
export const RefundCardDetails$inboundSchema: z.ZodType<
  RefundCardDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: RefundCardStatus$inboundSchema,
  failureCode: CardTransactionFailureCode$inboundSchema.optional(),
  initiatedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  confirmedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  settledOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  failedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  completedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type RefundCardDetails$Outbound = {
  status: string;
  failureCode?: string | undefined;
  initiatedOn?: string | undefined;
  confirmedOn?: string | undefined;
  settledOn?: string | undefined;
  failedOn?: string | undefined;
  completedOn?: string | undefined;
};

/** @internal */
export const RefundCardDetails$outboundSchema: z.ZodType<
  RefundCardDetails$Outbound,
  z.ZodTypeDef,
  RefundCardDetails
> = z.object({
  status: RefundCardStatus$outboundSchema,
  failureCode: CardTransactionFailureCode$outboundSchema.optional(),
  initiatedOn: z.date().transform(v => v.toISOString()).optional(),
  confirmedOn: z.date().transform(v => v.toISOString()).optional(),
  settledOn: z.date().transform(v => v.toISOString()).optional(),
  failedOn: z.date().transform(v => v.toISOString()).optional(),
  completedOn: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefundCardDetails$ {
  /** @deprecated use `RefundCardDetails$inboundSchema` instead. */
  export const inboundSchema = RefundCardDetails$inboundSchema;
  /** @deprecated use `RefundCardDetails$outboundSchema` instead. */
  export const outboundSchema = RefundCardDetails$outboundSchema;
  /** @deprecated use `RefundCardDetails$Outbound` instead. */
  export type Outbound = RefundCardDetails$Outbound;
}

export function refundCardDetailsToJSON(
  refundCardDetails: RefundCardDetails,
): string {
  return JSON.stringify(
    RefundCardDetails$outboundSchema.parse(refundCardDetails),
  );
}

export function refundCardDetailsFromJSON(
  jsonString: string,
): SafeParseResult<RefundCardDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RefundCardDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RefundCardDetails' from JSON`,
  );
}
