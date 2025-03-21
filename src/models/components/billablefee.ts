/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FeeCategory,
  FeeCategory$inboundSchema,
  FeeCategory$outboundSchema,
} from "./feecategory.js";
import {
  FeeModel,
  FeeModel$inboundSchema,
  FeeModel$outboundSchema,
} from "./feemodel.js";
import {
  FeeProperties,
  FeeProperties$inboundSchema,
  FeeProperties$Outbound,
  FeeProperties$outboundSchema,
} from "./feeproperties.js";

export type BillableFee = {
  billableFeeID?: string | undefined;
  /**
   * A unique code identifying a charge.
   */
  billableEvent?: string | undefined;
  /**
   * Specifies the name of the fee that will be billed.
   */
  feeName?: string | undefined;
  /**
   * Specifies the pricing model used for the calculation of the final fee.
   */
  feeModel: FeeModel;
  feeCategory: FeeCategory;
  /**
   * Defines the specific parameters used for fee calculation.
   */
  feeProperties?: FeeProperties | undefined;
  /**
   * Defines the specific conditions that must be met for the fee to be applied.
   */
  feeConditions?: { [k: string]: any } | undefined;
};

/** @internal */
export const BillableFee$inboundSchema: z.ZodType<
  BillableFee,
  z.ZodTypeDef,
  unknown
> = z.object({
  billableFeeID: z.string().optional(),
  billableEvent: z.string().optional(),
  feeName: z.string().optional(),
  feeModel: FeeModel$inboundSchema,
  feeCategory: FeeCategory$inboundSchema,
  feeProperties: FeeProperties$inboundSchema.optional(),
  feeConditions: z.record(z.any()).optional(),
});

/** @internal */
export type BillableFee$Outbound = {
  billableFeeID?: string | undefined;
  billableEvent?: string | undefined;
  feeName?: string | undefined;
  feeModel: string;
  feeCategory: string;
  feeProperties?: FeeProperties$Outbound | undefined;
  feeConditions?: { [k: string]: any } | undefined;
};

/** @internal */
export const BillableFee$outboundSchema: z.ZodType<
  BillableFee$Outbound,
  z.ZodTypeDef,
  BillableFee
> = z.object({
  billableFeeID: z.string().optional(),
  billableEvent: z.string().optional(),
  feeName: z.string().optional(),
  feeModel: FeeModel$outboundSchema,
  feeCategory: FeeCategory$outboundSchema,
  feeProperties: FeeProperties$outboundSchema.optional(),
  feeConditions: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillableFee$ {
  /** @deprecated use `BillableFee$inboundSchema` instead. */
  export const inboundSchema = BillableFee$inboundSchema;
  /** @deprecated use `BillableFee$outboundSchema` instead. */
  export const outboundSchema = BillableFee$outboundSchema;
  /** @deprecated use `BillableFee$Outbound` instead. */
  export type Outbound = BillableFee$Outbound;
}

export function billableFeeToJSON(billableFee: BillableFee): string {
  return JSON.stringify(BillableFee$outboundSchema.parse(billableFee));
}

export function billableFeeFromJSON(
  jsonString: string,
): SafeParseResult<BillableFee, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BillableFee$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BillableFee' from JSON`,
  );
}
