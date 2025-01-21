/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BankAccountException,
  BankAccountException$inboundSchema,
  BankAccountException$Outbound,
  BankAccountException$outboundSchema,
} from "./bankaccountexception.js";
import {
  BankAccountHolderType,
  BankAccountHolderType$inboundSchema,
  BankAccountHolderType$outboundSchema,
} from "./bankaccountholdertype.js";
import {
  BankAccountStatus,
  BankAccountStatus$inboundSchema,
  BankAccountStatus$outboundSchema,
} from "./bankaccountstatus.js";
import {
  BankAccountStatusReason,
  BankAccountStatusReason$inboundSchema,
  BankAccountStatusReason$outboundSchema,
} from "./bankaccountstatusreason.js";
import {
  BankAccountType,
  BankAccountType$inboundSchema,
  BankAccountType$outboundSchema,
} from "./bankaccounttype.js";
import {
  BasicPaymentMethod,
  BasicPaymentMethod$inboundSchema,
  BasicPaymentMethod$Outbound,
  BasicPaymentMethod$outboundSchema,
} from "./basicpaymentmethod.js";

/**
 * Describes a bank account linked to a Moov account.
 */
export type BankAccount = {
  bankAccountID: string;
  /**
   * Once the bank account is linked, we don't reveal the full bank account number.
   *
   * @remarks
   *
   * The fingerprint acts as a way to identify whether two linked bank accounts are the same.
   */
  fingerprint: string;
  status: BankAccountStatus;
  holderName: string;
  /**
   * The type of holder on a funding source.
   */
  holderType: BankAccountHolderType;
  bankName: string;
  /**
   * The bank account type.
   */
  bankAccountType: BankAccountType;
  routingNumber: string;
  lastFourAccountNumber: string;
  updatedOn: Date;
  /**
   * The reason the bank account status changed to the current value.
   */
  statusReason: BankAccountStatusReason;
  /**
   * Reason for, and details related to, an `errored` or `verificationFailed` bank account status.
   */
  exceptionDetails?: BankAccountException | undefined;
  /**
   * Includes any payment methods generated for a newly created bank account, removing the need to
   *
   * @remarks
   * call the List Payment Methods endpoint following a successful Create BankAccount request.
   *
   * **NOTE: This field is only populated for Create BankAccount requests made with the `X-Wait-For` header.**
   */
  paymentMethods?: Array<BasicPaymentMethod> | undefined;
};

/** @internal */
export const BankAccount$inboundSchema: z.ZodType<
  BankAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  bankAccountID: z.string(),
  fingerprint: z.string(),
  status: BankAccountStatus$inboundSchema,
  holderName: z.string(),
  holderType: BankAccountHolderType$inboundSchema,
  bankName: z.string(),
  bankAccountType: BankAccountType$inboundSchema,
  routingNumber: z.string(),
  lastFourAccountNumber: z.string(),
  updatedOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  statusReason: BankAccountStatusReason$inboundSchema,
  exceptionDetails: BankAccountException$inboundSchema.optional(),
  paymentMethods: z.array(BasicPaymentMethod$inboundSchema).optional(),
});

/** @internal */
export type BankAccount$Outbound = {
  bankAccountID: string;
  fingerprint: string;
  status: string;
  holderName: string;
  holderType: string;
  bankName: string;
  bankAccountType: string;
  routingNumber: string;
  lastFourAccountNumber: string;
  updatedOn: string;
  statusReason: string;
  exceptionDetails?: BankAccountException$Outbound | undefined;
  paymentMethods?: Array<BasicPaymentMethod$Outbound> | undefined;
};

/** @internal */
export const BankAccount$outboundSchema: z.ZodType<
  BankAccount$Outbound,
  z.ZodTypeDef,
  BankAccount
> = z.object({
  bankAccountID: z.string(),
  fingerprint: z.string(),
  status: BankAccountStatus$outboundSchema,
  holderName: z.string(),
  holderType: BankAccountHolderType$outboundSchema,
  bankName: z.string(),
  bankAccountType: BankAccountType$outboundSchema,
  routingNumber: z.string(),
  lastFourAccountNumber: z.string(),
  updatedOn: z.date().transform(v => v.toISOString()),
  statusReason: BankAccountStatusReason$outboundSchema,
  exceptionDetails: BankAccountException$outboundSchema.optional(),
  paymentMethods: z.array(BasicPaymentMethod$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccount$ {
  /** @deprecated use `BankAccount$inboundSchema` instead. */
  export const inboundSchema = BankAccount$inboundSchema;
  /** @deprecated use `BankAccount$outboundSchema` instead. */
  export const outboundSchema = BankAccount$outboundSchema;
  /** @deprecated use `BankAccount$Outbound` instead. */
  export type Outbound = BankAccount$Outbound;
}

export function bankAccountToJSON(bankAccount: BankAccount): string {
  return JSON.stringify(BankAccount$outboundSchema.parse(bankAccount));
}

export function bankAccountFromJSON(
  jsonString: string,
): SafeParseResult<BankAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BankAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BankAccount' from JSON`,
  );
}
