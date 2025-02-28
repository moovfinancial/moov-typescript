/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ACHTransactionDetails,
  ACHTransactionDetails$inboundSchema,
  ACHTransactionDetails$Outbound,
  ACHTransactionDetails$outboundSchema,
} from "./achtransactiondetails.js";
import {
  ApplePayResponse,
  ApplePayResponse$inboundSchema,
  ApplePayResponse$Outbound,
  ApplePayResponse$outboundSchema,
} from "./applepayresponse.js";
import {
  CardTransactionDetails,
  CardTransactionDetails$inboundSchema,
  CardTransactionDetails$Outbound,
  CardTransactionDetails$outboundSchema,
} from "./cardtransactiondetails.js";
import {
  PaymentMethodsBankAccount,
  PaymentMethodsBankAccount$inboundSchema,
  PaymentMethodsBankAccount$Outbound,
  PaymentMethodsBankAccount$outboundSchema,
} from "./paymentmethodsbankaccount.js";
import {
  PaymentMethodsCard,
  PaymentMethodsCard$inboundSchema,
  PaymentMethodsCard$Outbound,
  PaymentMethodsCard$outboundSchema,
} from "./paymentmethodscard.js";
import {
  PaymentMethodsWallet,
  PaymentMethodsWallet$inboundSchema,
  PaymentMethodsWallet$Outbound,
  PaymentMethodsWallet$outboundSchema,
} from "./paymentmethodswallet.js";
import {
  PaymentMethodType,
  PaymentMethodType$inboundSchema,
  PaymentMethodType$outboundSchema,
} from "./paymentmethodtype.js";
import {
  RTPTransactionDetails,
  RTPTransactionDetails$inboundSchema,
  RTPTransactionDetails$Outbound,
  RTPTransactionDetails$outboundSchema,
} from "./rtptransactiondetails.js";
import {
  TransferAccount,
  TransferAccount$inboundSchema,
  TransferAccount$Outbound,
  TransferAccount$outboundSchema,
} from "./transferaccount.js";

export type TransferDestination = {
  paymentMethodID: string;
  /**
   * The payment method type that represents a payment rail and directionality
   */
  paymentMethodType: PaymentMethodType;
  account: TransferAccount;
  /**
   * A bank account as contained within a payment method.
   */
  bankAccount?: PaymentMethodsBankAccount | undefined;
  wallet?: PaymentMethodsWallet | undefined;
  /**
   * A card as contained within a payment method.
   */
  card?: PaymentMethodsCard | undefined;
  /**
   * ACH specific details about the transaction.
   */
  achDetails?: ACHTransactionDetails | undefined;
  /**
   * Describes an Apple Pay token on a Moov account.
   */
  applePay?: ApplePayResponse | undefined;
  /**
   * Card-specific details about the transaction.
   */
  cardDetails?: CardTransactionDetails | undefined;
  /**
   * RTP specific details about the transaction.
   */
  rtpDetails?: RTPTransactionDetails | undefined;
};

/** @internal */
export const TransferDestination$inboundSchema: z.ZodType<
  TransferDestination,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType: PaymentMethodType$inboundSchema,
  account: TransferAccount$inboundSchema,
  bankAccount: PaymentMethodsBankAccount$inboundSchema.optional(),
  wallet: PaymentMethodsWallet$inboundSchema.optional(),
  card: PaymentMethodsCard$inboundSchema.optional(),
  achDetails: ACHTransactionDetails$inboundSchema.optional(),
  applePay: ApplePayResponse$inboundSchema.optional(),
  cardDetails: CardTransactionDetails$inboundSchema.optional(),
  rtpDetails: RTPTransactionDetails$inboundSchema.optional(),
});

/** @internal */
export type TransferDestination$Outbound = {
  paymentMethodID: string;
  paymentMethodType: string;
  account: TransferAccount$Outbound;
  bankAccount?: PaymentMethodsBankAccount$Outbound | undefined;
  wallet?: PaymentMethodsWallet$Outbound | undefined;
  card?: PaymentMethodsCard$Outbound | undefined;
  achDetails?: ACHTransactionDetails$Outbound | undefined;
  applePay?: ApplePayResponse$Outbound | undefined;
  cardDetails?: CardTransactionDetails$Outbound | undefined;
  rtpDetails?: RTPTransactionDetails$Outbound | undefined;
};

/** @internal */
export const TransferDestination$outboundSchema: z.ZodType<
  TransferDestination$Outbound,
  z.ZodTypeDef,
  TransferDestination
> = z.object({
  paymentMethodID: z.string(),
  paymentMethodType: PaymentMethodType$outboundSchema,
  account: TransferAccount$outboundSchema,
  bankAccount: PaymentMethodsBankAccount$outboundSchema.optional(),
  wallet: PaymentMethodsWallet$outboundSchema.optional(),
  card: PaymentMethodsCard$outboundSchema.optional(),
  achDetails: ACHTransactionDetails$outboundSchema.optional(),
  applePay: ApplePayResponse$outboundSchema.optional(),
  cardDetails: CardTransactionDetails$outboundSchema.optional(),
  rtpDetails: RTPTransactionDetails$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferDestination$ {
  /** @deprecated use `TransferDestination$inboundSchema` instead. */
  export const inboundSchema = TransferDestination$inboundSchema;
  /** @deprecated use `TransferDestination$outboundSchema` instead. */
  export const outboundSchema = TransferDestination$outboundSchema;
  /** @deprecated use `TransferDestination$Outbound` instead. */
  export type Outbound = TransferDestination$Outbound;
}

export function transferDestinationToJSON(
  transferDestination: TransferDestination,
): string {
  return JSON.stringify(
    TransferDestination$outboundSchema.parse(transferDestination),
  );
}

export function transferDestinationFromJSON(
  jsonString: string,
): SafeParseResult<TransferDestination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransferDestination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransferDestination' from JSON`,
  );
}
