/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ACHException,
  ACHException$inboundSchema,
  ACHException$Outbound,
  ACHException$outboundSchema,
} from "./achexception.js";
import {
  ACHTransactionStatus,
  ACHTransactionStatus$inboundSchema,
  ACHTransactionStatus$outboundSchema,
} from "./achtransactionstatus.js";
import {
  DebitHoldPeriod,
  DebitHoldPeriod$inboundSchema,
  DebitHoldPeriod$outboundSchema,
} from "./debitholdperiod.js";
import {
  SECCode,
  SECCode$inboundSchema,
  SECCode$outboundSchema,
} from "./seccode.js";

/**
 * ACH specific details about the transaction.
 */
export type ACHTransactionDetails = {
  /**
   * Status of a transaction within the ACH lifecycle.
   */
  status: ACHTransactionStatus;
  traceNumber: string;
  return?: ACHException | undefined;
  correction?: ACHException | undefined;
  /**
   * An optional override of the default NACHA company entry description for a transfer.
   */
  companyEntryDescription?: string | undefined;
  /**
   * An optional override of the default NACHA company name for a transfer.
   */
  originatingCompanyName?: string | undefined;
  /**
   * Code used to identify the ACH authorization method.
   */
  secCode?: SECCode | undefined;
  initiatedOn?: Date | undefined;
  originatedOn?: Date | undefined;
  correctedOn?: Date | undefined;
  returnedOn?: Date | undefined;
  completedOn?: Date | undefined;
  /**
   * An optional override of your default ACH hold period in banking days. The hold period must be longer than or equal to your default setting.
   */
  debitHoldPeriod?: DebitHoldPeriod | undefined;
};

/** @internal */
export const ACHTransactionDetails$inboundSchema: z.ZodType<
  ACHTransactionDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: ACHTransactionStatus$inboundSchema,
  traceNumber: z.string(),
  return: ACHException$inboundSchema.optional(),
  correction: ACHException$inboundSchema.optional(),
  companyEntryDescription: z.string().optional(),
  originatingCompanyName: z.string().optional(),
  secCode: SECCode$inboundSchema.optional(),
  initiatedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  originatedOn: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  correctedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  returnedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  completedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  debitHoldPeriod: DebitHoldPeriod$inboundSchema.optional(),
});

/** @internal */
export type ACHTransactionDetails$Outbound = {
  status: string;
  traceNumber: string;
  return?: ACHException$Outbound | undefined;
  correction?: ACHException$Outbound | undefined;
  companyEntryDescription?: string | undefined;
  originatingCompanyName?: string | undefined;
  secCode?: string | undefined;
  initiatedOn?: string | undefined;
  originatedOn?: string | undefined;
  correctedOn?: string | undefined;
  returnedOn?: string | undefined;
  completedOn?: string | undefined;
  debitHoldPeriod?: string | undefined;
};

/** @internal */
export const ACHTransactionDetails$outboundSchema: z.ZodType<
  ACHTransactionDetails$Outbound,
  z.ZodTypeDef,
  ACHTransactionDetails
> = z.object({
  status: ACHTransactionStatus$outboundSchema,
  traceNumber: z.string(),
  return: ACHException$outboundSchema.optional(),
  correction: ACHException$outboundSchema.optional(),
  companyEntryDescription: z.string().optional(),
  originatingCompanyName: z.string().optional(),
  secCode: SECCode$outboundSchema.optional(),
  initiatedOn: z.date().transform(v => v.toISOString()).optional(),
  originatedOn: z.date().transform(v => v.toISOString()).optional(),
  correctedOn: z.date().transform(v => v.toISOString()).optional(),
  returnedOn: z.date().transform(v => v.toISOString()).optional(),
  completedOn: z.date().transform(v => v.toISOString()).optional(),
  debitHoldPeriod: DebitHoldPeriod$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ACHTransactionDetails$ {
  /** @deprecated use `ACHTransactionDetails$inboundSchema` instead. */
  export const inboundSchema = ACHTransactionDetails$inboundSchema;
  /** @deprecated use `ACHTransactionDetails$outboundSchema` instead. */
  export const outboundSchema = ACHTransactionDetails$outboundSchema;
  /** @deprecated use `ACHTransactionDetails$Outbound` instead. */
  export type Outbound = ACHTransactionDetails$Outbound;
}

export function achTransactionDetailsToJSON(
  achTransactionDetails: ACHTransactionDetails,
): string {
  return JSON.stringify(
    ACHTransactionDetails$outboundSchema.parse(achTransactionDetails),
  );
}

export function achTransactionDetailsFromJSON(
  jsonString: string,
): SafeParseResult<ACHTransactionDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ACHTransactionDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ACHTransactionDetails' from JSON`,
  );
}
