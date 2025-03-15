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

export type FeePlan = {
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
   * Specifies the card processing pricing model
   */
  cardAcquiringModel: CardAcquiringModel;
  /**
   * Additional usage-based fees for this plan.
   */
  billableFees: Array<BillableFee>;
  /**
   * The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference.
   */
  minimumCommitment: MinimumCommitment;
  createdAt: Date;
};

/** @internal */
export const FeePlan$inboundSchema: z.ZodType<FeePlan, z.ZodTypeDef, unknown> =
  z.object({
    planID: z.string(),
    name: z.string(),
    description: z.string().optional(),
    cardAcquiringModel: CardAcquiringModel$inboundSchema,
    billableFees: z.array(BillableFee$inboundSchema),
    minimumCommitment: MinimumCommitment$inboundSchema,
    createdAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
  });

/** @internal */
export type FeePlan$Outbound = {
  planID: string;
  name: string;
  description?: string | undefined;
  cardAcquiringModel: string;
  billableFees: Array<BillableFee$Outbound>;
  minimumCommitment: MinimumCommitment$Outbound;
  createdAt: string;
};

/** @internal */
export const FeePlan$outboundSchema: z.ZodType<
  FeePlan$Outbound,
  z.ZodTypeDef,
  FeePlan
> = z.object({
  planID: z.string(),
  name: z.string(),
  description: z.string().optional(),
  cardAcquiringModel: CardAcquiringModel$outboundSchema,
  billableFees: z.array(BillableFee$outboundSchema),
  minimumCommitment: MinimumCommitment$outboundSchema,
  createdAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeePlan$ {
  /** @deprecated use `FeePlan$inboundSchema` instead. */
  export const inboundSchema = FeePlan$inboundSchema;
  /** @deprecated use `FeePlan$outboundSchema` instead. */
  export const outboundSchema = FeePlan$outboundSchema;
  /** @deprecated use `FeePlan$Outbound` instead. */
  export type Outbound = FeePlan$Outbound;
}

export function feePlanToJSON(feePlan: FeePlan): string {
  return JSON.stringify(FeePlan$outboundSchema.parse(feePlan));
}

export function feePlanFromJSON(
  jsonString: string,
): SafeParseResult<FeePlan, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FeePlan$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FeePlan' from JSON`,
  );
}
