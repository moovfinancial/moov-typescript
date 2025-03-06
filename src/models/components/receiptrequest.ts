/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ReceiptKind,
  ReceiptKind$inboundSchema,
  ReceiptKind$outboundSchema,
} from "./receiptkind.js";

/**
 * A receipt request for a specific transfer, schedule, or schedule occurrence.
 */
export type ReceiptRequest = {
  /**
   * The type of receipt being requested.
   */
  kind: ReceiptKind;
  /**
   * The email address to send the receipt to.
   *
   * @remarks
   * Either email or emailAccountID must be provided, but not both.
   */
  email?: string | undefined;
  /**
   * The accountID to send the receipt to.
   *
   * @remarks
   * Either email or emailAccountID must be provided, but not both.
   */
  emailAccountID?: string | undefined;
  /**
   * The ID of the transfer associated with this receipt.
   *
   * @remarks
   * Exactly one of forTransferID, forScheduleID, or forOccurrenceID must be provided.
   */
  forTransferID?: string | undefined;
  /**
   * The ID of the schedule associated with this receipt.
   *
   * @remarks
   * Exactly one of forTransferID, forScheduleID, or forOccurrenceID must be provided.
   */
  forScheduleID?: string | undefined;
  /**
   * The ID of the schedule occurrence associated with this receipt.
   *
   * @remarks
   * Exactly one of forTransferID, forScheduleID, or forOccurrenceID must be provided.
   */
  forOccurrenceID?: string | undefined;
};

/** @internal */
export const ReceiptRequest$inboundSchema: z.ZodType<
  ReceiptRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  kind: ReceiptKind$inboundSchema,
  email: z.string().optional(),
  emailAccountID: z.string().optional(),
  forTransferID: z.string().optional(),
  forScheduleID: z.string().optional(),
  forOccurrenceID: z.string().optional(),
});

/** @internal */
export type ReceiptRequest$Outbound = {
  kind: string;
  email?: string | undefined;
  emailAccountID?: string | undefined;
  forTransferID?: string | undefined;
  forScheduleID?: string | undefined;
  forOccurrenceID?: string | undefined;
};

/** @internal */
export const ReceiptRequest$outboundSchema: z.ZodType<
  ReceiptRequest$Outbound,
  z.ZodTypeDef,
  ReceiptRequest
> = z.object({
  kind: ReceiptKind$outboundSchema,
  email: z.string().optional(),
  emailAccountID: z.string().optional(),
  forTransferID: z.string().optional(),
  forScheduleID: z.string().optional(),
  forOccurrenceID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReceiptRequest$ {
  /** @deprecated use `ReceiptRequest$inboundSchema` instead. */
  export const inboundSchema = ReceiptRequest$inboundSchema;
  /** @deprecated use `ReceiptRequest$outboundSchema` instead. */
  export const outboundSchema = ReceiptRequest$outboundSchema;
  /** @deprecated use `ReceiptRequest$Outbound` instead. */
  export type Outbound = ReceiptRequest$Outbound;
}

export function receiptRequestToJSON(receiptRequest: ReceiptRequest): string {
  return JSON.stringify(ReceiptRequest$outboundSchema.parse(receiptRequest));
}

export function receiptRequestFromJSON(
  jsonString: string,
): SafeParseResult<ReceiptRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReceiptRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReceiptRequest' from JSON`,
  );
}
