/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BillableFee,
  BillableFee$inboundSchema,
  BillableFee$Outbound,
  BillableFee$outboundSchema,
} from "./billablefee.js";
import {
  CardAcquiringModel,
  CardAcquiringModel$inboundSchema,
  CardAcquiringModel$outboundSchema,
} from "./cardacquiringmodel.js";
import {
  MinimumCommitment,
  MinimumCommitment$inboundSchema,
  MinimumCommitment$Outbound,
  MinimumCommitment$outboundSchema,
} from "./minimumcommitment.js";

export type PartnerPricing = {
  planID: string;
  /**
   * The name of the fee plan.
   */
  name: string;
  /**
   * A description of the fee plan.
   */
  description?: string | undefined;
  /**
   * The integer percentage value of the revenue split for partner.
   */
  revenueShare: number;
  /**
   * Specifies the card processing pricing model
   */
  cardAcquiringModel: CardAcquiringModel;
  billableFees: Array<BillableFee>;
  /**
   * The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference.
   */
  minimumCommitment: MinimumCommitment;
  createdAt: Date;
};

/** @internal */
export const PartnerPricing$inboundSchema: z.ZodType<
  PartnerPricing,
  z.ZodTypeDef,
  unknown
> = z.object({
  planID: z.string(),
  name: z.string(),
  description: z.string().optional(),
  revenueShare: z.number().int(),
  cardAcquiringModel: CardAcquiringModel$inboundSchema,
  billableFees: z.array(BillableFee$inboundSchema),
  minimumCommitment: MinimumCommitment$inboundSchema,
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type PartnerPricing$Outbound = {
  planID: string;
  name: string;
  description?: string | undefined;
  revenueShare: number;
  cardAcquiringModel: string;
  billableFees: Array<BillableFee$Outbound>;
  minimumCommitment: MinimumCommitment$Outbound;
  createdAt: string;
};

/** @internal */
export const PartnerPricing$outboundSchema: z.ZodType<
  PartnerPricing$Outbound,
  z.ZodTypeDef,
  PartnerPricing
> = z.object({
  planID: z.string(),
  name: z.string(),
  description: z.string().optional(),
  revenueShare: z.number().int(),
  cardAcquiringModel: CardAcquiringModel$outboundSchema,
  billableFees: z.array(BillableFee$outboundSchema),
  minimumCommitment: MinimumCommitment$outboundSchema,
  createdAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartnerPricing$ {
  /** @deprecated use `PartnerPricing$inboundSchema` instead. */
  export const inboundSchema = PartnerPricing$inboundSchema;
  /** @deprecated use `PartnerPricing$outboundSchema` instead. */
  export const outboundSchema = PartnerPricing$outboundSchema;
  /** @deprecated use `PartnerPricing$Outbound` instead. */
  export type Outbound = PartnerPricing$Outbound;
}

export function partnerPricingToJSON(partnerPricing: PartnerPricing): string {
  return JSON.stringify(PartnerPricing$outboundSchema.parse(partnerPricing));
}

export function partnerPricingFromJSON(
  jsonString: string,
): SafeParseResult<PartnerPricing, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PartnerPricing$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PartnerPricing' from JSON`,
  );
}
