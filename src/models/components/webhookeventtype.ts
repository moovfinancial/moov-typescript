/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of event that occurred.
 */
export const WebhookEventType = {
  Wildcard: "*",
  AccountCreated: "account.created",
  AccountUpdated: "account.updated",
  AccountDeleted: "account.deleted",
  BalanceUpdated: "balance.updated",
  BankAccountCreated: "bankAccount.created",
  BankAccountUpdated: "bankAccount.updated",
  BankAccountDeleted: "bankAccount.deleted",
  CancellationCreated: "cancellation.created",
  CancellationUpdated: "cancellation.updated",
  CardAutoUpdated: "card.autoUpdated",
  CapabilityRequested: "capability.requested",
  CapabilityUpdated: "capability.updated",
  DisputeCreated: "dispute.created",
  DisputeUpdated: "dispute.updated",
  NetworkIDUpdated: "networkID.updated",
  PaymentMethodEnabled: "paymentMethod.enabled",
  PaymentMethodDisabled: "paymentMethod.disabled",
  RefundCreated: "refund.created",
  RefundUpdated: "refund.updated",
  RepresentativeCreated: "representative.created",
  RepresentativeUpdated: "representative.updated",
  RepresentativeDeleted: "representative.deleted",
  SweepCreated: "sweep.created",
  SweepUpdated: "sweep.updated",
  TerminalApplicationCreated: "terminalApplication.created",
  TerminalApplicationUpdated: "terminalApplication.updated",
  TransferCreated: "transfer.created",
  TransferUpdated: "transfer.updated",
  WalletTransactionUpdated: "walletTransaction.updated",
} as const;
/**
 * The type of event that occurred.
 */
export type WebhookEventType = ClosedEnum<typeof WebhookEventType>;

/** @internal */
export const WebhookEventType$inboundSchema: z.ZodNativeEnum<
  typeof WebhookEventType
> = z.nativeEnum(WebhookEventType);

/** @internal */
export const WebhookEventType$outboundSchema: z.ZodNativeEnum<
  typeof WebhookEventType
> = WebhookEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookEventType$ {
  /** @deprecated use `WebhookEventType$inboundSchema` instead. */
  export const inboundSchema = WebhookEventType$inboundSchema;
  /** @deprecated use `WebhookEventType$outboundSchema` instead. */
  export const outboundSchema = WebhookEventType$outboundSchema;
}
