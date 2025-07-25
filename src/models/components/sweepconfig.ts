/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SweepConfigPaymentMethod,
  SweepConfigPaymentMethod$inboundSchema,
  SweepConfigPaymentMethod$Outbound,
  SweepConfigPaymentMethod$outboundSchema,
} from "./sweepconfigpaymentmethod.js";
import {
  SweepConfigStatus,
  SweepConfigStatus$inboundSchema,
  SweepConfigStatus$outboundSchema,
} from "./sweepconfigstatus.js";

export type SweepConfig = {
  sweepConfigID: string;
  walletID: string;
  status: SweepConfigStatus;
  /**
   * The payment method used to push or pull funds to a bank account.
   *
   * @remarks
   * The push payment method can only be ach-credit-standard, ach-credit-same-day, or rtp-credit. The pull payment method can only be ach-debit-fund.
   */
  pushPaymentMethod: SweepConfigPaymentMethod;
  /**
   * The payment method used to push or pull funds to a bank account.
   *
   * @remarks
   * The push payment method can only be ach-credit-standard, ach-credit-same-day, or rtp-credit. The pull payment method can only be ach-debit-fund.
   */
  pullPaymentMethod: SweepConfigPaymentMethod;
  /**
   * An optional field to specify an amount to maintain in the wallet. This is a decimal-formatted numerical string that represents up to 2 decimal place precision. In USD for example, 12.34 is $12.34 and 0.99 is $0.99. If not supplied, the default is 0.00.
   */
  minimumBalance?: string | undefined;
  /**
   * The text that appears on the banking statement. The default descriptor is a 10 character ID if an override is not set in the sweep configs statementDescriptor.
   */
  statementDescriptor?: string | undefined;
  /**
   * An array of fields that are locked. To request updates, please contact Moov support.
   */
  lockedFields?: Array<string> | undefined;
  createdOn: Date;
  updatedOn: Date;
};

/** @internal */
export const SweepConfig$inboundSchema: z.ZodType<
  SweepConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  sweepConfigID: z.string(),
  walletID: z.string(),
  status: SweepConfigStatus$inboundSchema,
  pushPaymentMethod: SweepConfigPaymentMethod$inboundSchema,
  pullPaymentMethod: SweepConfigPaymentMethod$inboundSchema,
  minimumBalance: z.string().optional(),
  statementDescriptor: z.string().optional(),
  lockedFields: z.array(z.string()).optional(),
  createdOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updatedOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type SweepConfig$Outbound = {
  sweepConfigID: string;
  walletID: string;
  status: string;
  pushPaymentMethod: SweepConfigPaymentMethod$Outbound;
  pullPaymentMethod: SweepConfigPaymentMethod$Outbound;
  minimumBalance?: string | undefined;
  statementDescriptor?: string | undefined;
  lockedFields?: Array<string> | undefined;
  createdOn: string;
  updatedOn: string;
};

/** @internal */
export const SweepConfig$outboundSchema: z.ZodType<
  SweepConfig$Outbound,
  z.ZodTypeDef,
  SweepConfig
> = z.object({
  sweepConfigID: z.string(),
  walletID: z.string(),
  status: SweepConfigStatus$outboundSchema,
  pushPaymentMethod: SweepConfigPaymentMethod$outboundSchema,
  pullPaymentMethod: SweepConfigPaymentMethod$outboundSchema,
  minimumBalance: z.string().optional(),
  statementDescriptor: z.string().optional(),
  lockedFields: z.array(z.string()).optional(),
  createdOn: z.date().transform(v => v.toISOString()),
  updatedOn: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SweepConfig$ {
  /** @deprecated use `SweepConfig$inboundSchema` instead. */
  export const inboundSchema = SweepConfig$inboundSchema;
  /** @deprecated use `SweepConfig$outboundSchema` instead. */
  export const outboundSchema = SweepConfig$outboundSchema;
  /** @deprecated use `SweepConfig$Outbound` instead. */
  export type Outbound = SweepConfig$Outbound;
}

export function sweepConfigToJSON(sweepConfig: SweepConfig): string {
  return JSON.stringify(SweepConfig$outboundSchema.parse(sweepConfig));
}

export function sweepConfigFromJSON(
  jsonString: string,
): SafeParseResult<SweepConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SweepConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SweepConfig' from JSON`,
  );
}
