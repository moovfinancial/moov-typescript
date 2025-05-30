/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DisputeTransferDetails = {
  /**
   * The disputed transfer's ID.
   */
  transferID: string;
};

/** @internal */
export const DisputeTransferDetails$inboundSchema: z.ZodType<
  DisputeTransferDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  transferID: z.string(),
});

/** @internal */
export type DisputeTransferDetails$Outbound = {
  transferID: string;
};

/** @internal */
export const DisputeTransferDetails$outboundSchema: z.ZodType<
  DisputeTransferDetails$Outbound,
  z.ZodTypeDef,
  DisputeTransferDetails
> = z.object({
  transferID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisputeTransferDetails$ {
  /** @deprecated use `DisputeTransferDetails$inboundSchema` instead. */
  export const inboundSchema = DisputeTransferDetails$inboundSchema;
  /** @deprecated use `DisputeTransferDetails$outboundSchema` instead. */
  export const outboundSchema = DisputeTransferDetails$outboundSchema;
  /** @deprecated use `DisputeTransferDetails$Outbound` instead. */
  export type Outbound = DisputeTransferDetails$Outbound;
}

export function disputeTransferDetailsToJSON(
  disputeTransferDetails: DisputeTransferDetails,
): string {
  return JSON.stringify(
    DisputeTransferDetails$outboundSchema.parse(disputeTransferDetails),
  );
}

export function disputeTransferDetailsFromJSON(
  jsonString: string,
): SafeParseResult<DisputeTransferDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DisputeTransferDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DisputeTransferDetails' from JSON`,
  );
}
