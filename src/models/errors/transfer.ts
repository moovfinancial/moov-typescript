/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * Details of a Transfer.
 */
export type TransferData = {
  transferID: string;
  createdOn: Date;
  source: components.TransferSource;
  destination: components.TransferDestination;
  completedOn?: Date | undefined;
  /**
   * Status of a transfer.
   */
  status: components.TransferStatus;
  /**
   * Reason for a transfer's failure.
   */
  failureReason?: components.TransferFailureReason | undefined;
  amount: components.Amount;
  /**
   * An optional description of the transfer for your own internal use.
   */
  description?: string | undefined;
  /**
   * Free-form key-value pair list. Useful for storing information that is not captured elsewhere.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Total or markup fee.
   */
  facilitatorFee?: components.FacilitatorFee | undefined;
  /**
   * Fees charged to your platform account for transfers.
   */
  moovFee?: number | undefined;
  /**
   * Same as `moovFee`, but a decimal-formatted numerical string that represents up to 9 decimal place precision.
   */
  moovFeeDecimal?: string | undefined;
  /**
   * Processing and pass-through costs that add up to the moovFee.
   */
  moovFeeDetails?: components.MoovFeeDetails | undefined;
  groupID?: string | undefined;
  refundedAmount?: components.Amount | undefined;
  refunds?: Array<components.CardAcquiringRefund> | undefined;
  disputedAmount?: components.Amount | undefined;
  disputes?: Array<components.CardAcquiringDispute> | undefined;
  sweepID?: string | undefined;
  scheduleID?: string | undefined;
  occurrenceID?: string | undefined;
};

/**
 * Details of a Transfer.
 */
export class Transfer extends Error {
  transferID: string;
  createdOn: Date;
  source: components.TransferSource;
  destination: components.TransferDestination;
  completedOn?: Date | undefined;
  /**
   * Status of a transfer.
   */
  status: components.TransferStatus;
  /**
   * Reason for a transfer's failure.
   */
  failureReason?: components.TransferFailureReason | undefined;
  amount: components.Amount;
  /**
   * An optional description of the transfer for your own internal use.
   */
  description?: string | undefined;
  /**
   * Free-form key-value pair list. Useful for storing information that is not captured elsewhere.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Total or markup fee.
   */
  facilitatorFee?: components.FacilitatorFee | undefined;
  /**
   * Fees charged to your platform account for transfers.
   */
  moovFee?: number | undefined;
  /**
   * Same as `moovFee`, but a decimal-formatted numerical string that represents up to 9 decimal place precision.
   */
  moovFeeDecimal?: string | undefined;
  /**
   * Processing and pass-through costs that add up to the moovFee.
   */
  moovFeeDetails?: components.MoovFeeDetails | undefined;
  groupID?: string | undefined;
  refundedAmount?: components.Amount | undefined;
  refunds?: Array<components.CardAcquiringRefund> | undefined;
  disputedAmount?: components.Amount | undefined;
  disputes?: Array<components.CardAcquiringDispute> | undefined;
  sweepID?: string | undefined;
  scheduleID?: string | undefined;
  occurrenceID?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: TransferData;

  constructor(err: TransferData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.transferID = err.transferID;
    this.createdOn = err.createdOn;
    this.source = err.source;
    this.destination = err.destination;
    if (err.completedOn != null) this.completedOn = err.completedOn;
    this.status = err.status;
    if (err.failureReason != null) this.failureReason = err.failureReason;
    this.amount = err.amount;
    if (err.description != null) this.description = err.description;
    if (err.metadata != null) this.metadata = err.metadata;
    if (err.facilitatorFee != null) this.facilitatorFee = err.facilitatorFee;
    if (err.moovFee != null) this.moovFee = err.moovFee;
    if (err.moovFeeDecimal != null) this.moovFeeDecimal = err.moovFeeDecimal;
    if (err.moovFeeDetails != null) this.moovFeeDetails = err.moovFeeDetails;
    if (err.groupID != null) this.groupID = err.groupID;
    if (err.refundedAmount != null) this.refundedAmount = err.refundedAmount;
    if (err.refunds != null) this.refunds = err.refunds;
    if (err.disputedAmount != null) this.disputedAmount = err.disputedAmount;
    if (err.disputes != null) this.disputes = err.disputes;
    if (err.sweepID != null) this.sweepID = err.sweepID;
    if (err.scheduleID != null) this.scheduleID = err.scheduleID;
    if (err.occurrenceID != null) this.occurrenceID = err.occurrenceID;

    this.name = "Transfer";
  }
}

/** @internal */
export const Transfer$inboundSchema: z.ZodType<
  Transfer,
  z.ZodTypeDef,
  unknown
> = z.object({
  transferID: z.string(),
  createdOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  source: components.TransferSource$inboundSchema,
  destination: components.TransferDestination$inboundSchema,
  completedOn: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  status: components.TransferStatus$inboundSchema,
  failureReason: components.TransferFailureReason$inboundSchema.optional(),
  amount: components.Amount$inboundSchema,
  description: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  facilitatorFee: components.FacilitatorFee$inboundSchema.optional(),
  moovFee: z.number().int().optional(),
  moovFeeDecimal: z.string().optional(),
  moovFeeDetails: components.MoovFeeDetails$inboundSchema.optional(),
  groupID: z.string().optional(),
  refundedAmount: components.Amount$inboundSchema.optional(),
  refunds: z.array(components.CardAcquiringRefund$inboundSchema).optional(),
  disputedAmount: components.Amount$inboundSchema.optional(),
  disputes: z.array(components.CardAcquiringDispute$inboundSchema).optional(),
  sweepID: z.string().optional(),
  scheduleID: z.string().optional(),
  occurrenceID: z.string().optional(),
})
  .transform((v) => {
    return new Transfer(v);
  });

/** @internal */
export type Transfer$Outbound = {
  transferID: string;
  createdOn: string;
  source: components.TransferSource$Outbound;
  destination: components.TransferDestination$Outbound;
  completedOn?: string | undefined;
  status: string;
  failureReason?: string | undefined;
  amount: components.Amount$Outbound;
  description?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
  facilitatorFee?: components.FacilitatorFee$Outbound | undefined;
  moovFee?: number | undefined;
  moovFeeDecimal?: string | undefined;
  moovFeeDetails?: components.MoovFeeDetails$Outbound | undefined;
  groupID?: string | undefined;
  refundedAmount?: components.Amount$Outbound | undefined;
  refunds?: Array<components.CardAcquiringRefund$Outbound> | undefined;
  disputedAmount?: components.Amount$Outbound | undefined;
  disputes?: Array<components.CardAcquiringDispute$Outbound> | undefined;
  sweepID?: string | undefined;
  scheduleID?: string | undefined;
  occurrenceID?: string | undefined;
};

/** @internal */
export const Transfer$outboundSchema: z.ZodType<
  Transfer$Outbound,
  z.ZodTypeDef,
  Transfer
> = z.instanceof(Transfer)
  .transform(v => v.data$)
  .pipe(z.object({
    transferID: z.string(),
    createdOn: z.date().transform(v => v.toISOString()),
    source: components.TransferSource$outboundSchema,
    destination: components.TransferDestination$outboundSchema,
    completedOn: z.date().transform(v => v.toISOString()).optional(),
    status: components.TransferStatus$outboundSchema,
    failureReason: components.TransferFailureReason$outboundSchema.optional(),
    amount: components.Amount$outboundSchema,
    description: z.string().optional(),
    metadata: z.record(z.string()).optional(),
    facilitatorFee: components.FacilitatorFee$outboundSchema.optional(),
    moovFee: z.number().int().optional(),
    moovFeeDecimal: z.string().optional(),
    moovFeeDetails: components.MoovFeeDetails$outboundSchema.optional(),
    groupID: z.string().optional(),
    refundedAmount: components.Amount$outboundSchema.optional(),
    refunds: z.array(components.CardAcquiringRefund$outboundSchema).optional(),
    disputedAmount: components.Amount$outboundSchema.optional(),
    disputes: z.array(components.CardAcquiringDispute$outboundSchema)
      .optional(),
    sweepID: z.string().optional(),
    scheduleID: z.string().optional(),
    occurrenceID: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Transfer$ {
  /** @deprecated use `Transfer$inboundSchema` instead. */
  export const inboundSchema = Transfer$inboundSchema;
  /** @deprecated use `Transfer$outboundSchema` instead. */
  export const outboundSchema = Transfer$outboundSchema;
  /** @deprecated use `Transfer$Outbound` instead. */
  export type Outbound = Transfer$Outbound;
}
