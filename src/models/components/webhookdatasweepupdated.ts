/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SweepStatus,
  SweepStatus$inboundSchema,
  SweepStatus$outboundSchema,
} from "./sweepstatus.js";

export type WebhookDataSweepUpdated = {
  walletID: string;
  sweepID: string;
  transferID?: string | undefined;
  status: SweepStatus;
};

/** @internal */
export const WebhookDataSweepUpdated$inboundSchema: z.ZodType<
  WebhookDataSweepUpdated,
  z.ZodTypeDef,
  unknown
> = z.object({
  walletID: z.string(),
  sweepID: z.string(),
  transferID: z.string().optional(),
  status: SweepStatus$inboundSchema,
});

/** @internal */
export type WebhookDataSweepUpdated$Outbound = {
  walletID: string;
  sweepID: string;
  transferID?: string | undefined;
  status: string;
};

/** @internal */
export const WebhookDataSweepUpdated$outboundSchema: z.ZodType<
  WebhookDataSweepUpdated$Outbound,
  z.ZodTypeDef,
  WebhookDataSweepUpdated
> = z.object({
  walletID: z.string(),
  sweepID: z.string(),
  transferID: z.string().optional(),
  status: SweepStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookDataSweepUpdated$ {
  /** @deprecated use `WebhookDataSweepUpdated$inboundSchema` instead. */
  export const inboundSchema = WebhookDataSweepUpdated$inboundSchema;
  /** @deprecated use `WebhookDataSweepUpdated$outboundSchema` instead. */
  export const outboundSchema = WebhookDataSweepUpdated$outboundSchema;
  /** @deprecated use `WebhookDataSweepUpdated$Outbound` instead. */
  export type Outbound = WebhookDataSweepUpdated$Outbound;
}

export function webhookDataSweepUpdatedToJSON(
  webhookDataSweepUpdated: WebhookDataSweepUpdated,
): string {
  return JSON.stringify(
    WebhookDataSweepUpdated$outboundSchema.parse(webhookDataSweepUpdated),
  );
}

export function webhookDataSweepUpdatedFromJSON(
  jsonString: string,
): SafeParseResult<WebhookDataSweepUpdated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookDataSweepUpdated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookDataSweepUpdated' from JSON`,
  );
}
