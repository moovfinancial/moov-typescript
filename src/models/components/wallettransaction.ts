/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WalletTransactionSourceType,
  WalletTransactionSourceType$inboundSchema,
  WalletTransactionSourceType$outboundSchema,
} from "./wallettransactionsourcetype.js";
import {
  WalletTransactionStatus,
  WalletTransactionStatus$inboundSchema,
  WalletTransactionStatus$outboundSchema,
} from "./wallettransactionstatus.js";
import {
  WalletTransactionType,
  WalletTransactionType$inboundSchema,
  WalletTransactionType$outboundSchema,
} from "./wallettransactiontype.js";

/**
 * A transaction that funds or deducts from the wallet.
 */
export type WalletTransaction = {
  walletID: string;
  transactionID: string;
  transactionType: WalletTransactionType;
  sourceType: WalletTransactionSourceType;
  /**
   * The ID of the Moov object to which this transaction is related.
   */
  sourceID: string;
  status: WalletTransactionStatus;
  /**
   * Detailed description of the transaction.
   */
  memo: string;
  createdOn: Date;
  completedOn?: Date | undefined;
  /**
   * A 3-letter ISO 4217 currency code.
   */
  currency: string;
  /**
   * The total transaction amount. The amount is in the smallest unit of the specified currency. In USD this is cents, for example, $12.04 is 1204 and $0.99 is 99.
   */
  grossAmount: number;
  /**
   * The total transaction amount. Same as `grossAmount`, but a decimal-formatted numerical string that represents up to 9 decimal place precision. In USD for example, 12.987654321 is $12.987654321 and 0.9987634521 is $0.9987634521.
   */
  grossAmountDecimal: string;
  /**
   * Total fees paid for the transaction. The value is in the smallest unit of the specified currency. In USD this is cents, for example, $12.04 is 1204 and $0.99 is 99.
   */
  fee: number;
  /**
   * The IDs of the fees paid for the transaction.
   */
  feeIDs?: Array<string> | undefined;
  /**
   * Total fees paid for the transaction. Same as `fee`, but a decimal-formatted numerical string that represents up to 9 decimal place precision. In USD for example, 12.987654321 is $12.987654321 and 0.9987634521 is $0.9987634521.
   */
  feeDecimal: string;
  /**
   * Net amount is the gross amount less fees paid, and the amount that affects the wallet's balance. The amount is in the smallest unit of the specified currency. In USD this is cents, for example, $12.04 is 1204 and $0.99 is 99.
   */
  netAmount: number;
  /**
   * Net amount is the gross amount less fees paid, and the amount that affects the wallet's balance. Same as `netAmount`, but a decimal-formatted numerical string that represents up to 9 decimal place precision. In USD for example, 12.987654321 is $12.987654321 and 0.9987634521 is $0.9987634521.
   */
  netAmountDecimal: string;
  /**
   * The wallet's total available balance after recording a completed transaction. The value is in the smallest unit of the specified currency. In USD this is cents, for example, $12.04 is 1204 and $0.99 is 99.
   */
  availableBalance?: number | undefined;
  /**
   * The wallet's total available balance after recording a completed transaction. Same as `availableBalance`, but a decimal-formatted numerical string that represents up to 9 decimal place precision. In USD for example, 12.987654321 is $12.987654321 and 0.9987634521 is $0.9987634521.
   */
  availableBalanceDecimal?: string | undefined;
  sweepID?: string | undefined;
};

/** @internal */
export const WalletTransaction$inboundSchema: z.ZodType<
  WalletTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  walletID: z.string(),
  transactionID: z.string(),
  transactionType: WalletTransactionType$inboundSchema,
  sourceType: WalletTransactionSourceType$inboundSchema,
  sourceID: z.string(),
  status: WalletTransactionStatus$inboundSchema,
  memo: z.string(),
  createdOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  completedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  currency: z.string(),
  grossAmount: z.number().int(),
  grossAmountDecimal: z.string(),
  fee: z.number().int(),
  feeIDs: z.array(z.string()).optional(),
  feeDecimal: z.string(),
  netAmount: z.number().int(),
  netAmountDecimal: z.string(),
  availableBalance: z.number().int().optional(),
  availableBalanceDecimal: z.string().optional(),
  sweepID: z.string().optional(),
});

/** @internal */
export type WalletTransaction$Outbound = {
  walletID: string;
  transactionID: string;
  transactionType: string;
  sourceType: string;
  sourceID: string;
  status: string;
  memo: string;
  createdOn: string;
  completedOn?: string | undefined;
  currency: string;
  grossAmount: number;
  grossAmountDecimal: string;
  fee: number;
  feeIDs?: Array<string> | undefined;
  feeDecimal: string;
  netAmount: number;
  netAmountDecimal: string;
  availableBalance?: number | undefined;
  availableBalanceDecimal?: string | undefined;
  sweepID?: string | undefined;
};

/** @internal */
export const WalletTransaction$outboundSchema: z.ZodType<
  WalletTransaction$Outbound,
  z.ZodTypeDef,
  WalletTransaction
> = z.object({
  walletID: z.string(),
  transactionID: z.string(),
  transactionType: WalletTransactionType$outboundSchema,
  sourceType: WalletTransactionSourceType$outboundSchema,
  sourceID: z.string(),
  status: WalletTransactionStatus$outboundSchema,
  memo: z.string(),
  createdOn: z.date().transform(v => v.toISOString()),
  completedOn: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string(),
  grossAmount: z.number().int(),
  grossAmountDecimal: z.string(),
  fee: z.number().int(),
  feeIDs: z.array(z.string()).optional(),
  feeDecimal: z.string(),
  netAmount: z.number().int(),
  netAmountDecimal: z.string(),
  availableBalance: z.number().int().optional(),
  availableBalanceDecimal: z.string().optional(),
  sweepID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletTransaction$ {
  /** @deprecated use `WalletTransaction$inboundSchema` instead. */
  export const inboundSchema = WalletTransaction$inboundSchema;
  /** @deprecated use `WalletTransaction$outboundSchema` instead. */
  export const outboundSchema = WalletTransaction$outboundSchema;
  /** @deprecated use `WalletTransaction$Outbound` instead. */
  export type Outbound = WalletTransaction$Outbound;
}

export function walletTransactionToJSON(
  walletTransaction: WalletTransaction,
): string {
  return JSON.stringify(
    WalletTransaction$outboundSchema.parse(walletTransaction),
  );
}

export function walletTransactionFromJSON(
  jsonString: string,
): SafeParseResult<WalletTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WalletTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WalletTransaction' from JSON`,
  );
}
