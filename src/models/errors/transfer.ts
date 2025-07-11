/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";
import { MoovError } from "./mooverror.js";

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
   * An optional description of the transfer that is used on receipts and for your own internal use.
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
  /**
   * Fees charged to accounts involved in the transfer.
   */
  moovFees?: Array<components.MoovFee> | undefined;
  groupID?: string | undefined;
  cancellations?: Array<components.Cancellation> | undefined;
  refundedAmount?: components.Amount | undefined;
  refunds?: Array<components.CardAcquiringRefund> | undefined;
  disputedAmount?: components.Amount | undefined;
  disputes?: Array<components.CardAcquiringDispute> | undefined;
  sweepID?: string | undefined;
  scheduleID?: string | undefined;
  occurrenceID?: string | undefined;
  paymentLinkCode?: string | undefined;
  /**
   * Optional sales tax amount. `transfer.amount.value` should be inclusive of any sales tax and represents the total amount charged.
   */
  salesTaxAmount?: components.Amount | undefined;
  /**
   * Optional alias from a foreign/external system which can be used to reference this resource.
   */
  foreignID?: string | undefined;
};

/**
 * Details of a Transfer.
 */
export class Transfer extends MoovError {
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
   * An optional description of the transfer that is used on receipts and for your own internal use.
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
  /**
   * Fees charged to accounts involved in the transfer.
   */
  moovFees?: Array<components.MoovFee> | undefined;
  groupID?: string | undefined;
  cancellations?: Array<components.Cancellation> | undefined;
  refundedAmount?: components.Amount | undefined;
  refunds?: Array<components.CardAcquiringRefund> | undefined;
  disputedAmount?: components.Amount | undefined;
  disputes?: Array<components.CardAcquiringDispute> | undefined;
  sweepID?: string | undefined;
  scheduleID?: string | undefined;
  occurrenceID?: string | undefined;
  paymentLinkCode?: string | undefined;
  /**
   * Optional sales tax amount. `transfer.amount.value` should be inclusive of any sales tax and represents the total amount charged.
   */
  salesTaxAmount?: components.Amount | undefined;
  /**
   * Optional alias from a foreign/external system which can be used to reference this resource.
   */
  foreignID?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: TransferData;

  constructor(
    err: TransferData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
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
    if (err.moovFees != null) this.moovFees = err.moovFees;
    if (err.groupID != null) this.groupID = err.groupID;
    if (err.cancellations != null) this.cancellations = err.cancellations;
    if (err.refundedAmount != null) this.refundedAmount = err.refundedAmount;
    if (err.refunds != null) this.refunds = err.refunds;
    if (err.disputedAmount != null) this.disputedAmount = err.disputedAmount;
    if (err.disputes != null) this.disputes = err.disputes;
    if (err.sweepID != null) this.sweepID = err.sweepID;
    if (err.scheduleID != null) this.scheduleID = err.scheduleID;
    if (err.occurrenceID != null) this.occurrenceID = err.occurrenceID;
    if (err.paymentLinkCode != null) this.paymentLinkCode = err.paymentLinkCode;
    if (err.salesTaxAmount != null) this.salesTaxAmount = err.salesTaxAmount;
    if (err.foreignID != null) this.foreignID = err.foreignID;

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
  moovFees: z.array(components.MoovFee$inboundSchema).optional(),
  groupID: z.string().optional(),
  cancellations: z.array(components.Cancellation$inboundSchema).optional(),
  refundedAmount: components.Amount$inboundSchema.optional(),
  refunds: z.array(components.CardAcquiringRefund$inboundSchema).optional(),
  disputedAmount: components.Amount$inboundSchema.optional(),
  disputes: z.array(components.CardAcquiringDispute$inboundSchema).optional(),
  sweepID: z.string().optional(),
  scheduleID: z.string().optional(),
  occurrenceID: z.string().optional(),
  paymentLinkCode: z.string().optional(),
  salesTaxAmount: components.Amount$inboundSchema.optional(),
  foreignID: z.string().optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new Transfer(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
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
  moovFees?: Array<components.MoovFee$Outbound> | undefined;
  groupID?: string | undefined;
  cancellations?: Array<components.Cancellation$Outbound> | undefined;
  refundedAmount?: components.Amount$Outbound | undefined;
  refunds?: Array<components.CardAcquiringRefund$Outbound> | undefined;
  disputedAmount?: components.Amount$Outbound | undefined;
  disputes?: Array<components.CardAcquiringDispute$Outbound> | undefined;
  sweepID?: string | undefined;
  scheduleID?: string | undefined;
  occurrenceID?: string | undefined;
  paymentLinkCode?: string | undefined;
  salesTaxAmount?: components.Amount$Outbound | undefined;
  foreignID?: string | undefined;
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
    moovFees: z.array(components.MoovFee$outboundSchema).optional(),
    groupID: z.string().optional(),
    cancellations: z.array(components.Cancellation$outboundSchema).optional(),
    refundedAmount: components.Amount$outboundSchema.optional(),
    refunds: z.array(components.CardAcquiringRefund$outboundSchema).optional(),
    disputedAmount: components.Amount$outboundSchema.optional(),
    disputes: z.array(components.CardAcquiringDispute$outboundSchema)
      .optional(),
    sweepID: z.string().optional(),
    scheduleID: z.string().optional(),
    occurrenceID: z.string().optional(),
    paymentLinkCode: z.string().optional(),
    salesTaxAmount: components.Amount$outboundSchema.optional(),
    foreignID: z.string().optional(),
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
