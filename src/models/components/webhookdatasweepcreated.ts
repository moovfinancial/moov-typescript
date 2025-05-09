/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WebhookDataSweepCreated = {
  walletID: string;
  sweepID: string;
};

/** @internal */
export const WebhookDataSweepCreated$inboundSchema: z.ZodType<
  WebhookDataSweepCreated,
  z.ZodTypeDef,
  unknown
> = z.object({
  walletID: z.string(),
  sweepID: z.string(),
});

/** @internal */
export type WebhookDataSweepCreated$Outbound = {
  walletID: string;
  sweepID: string;
};

/** @internal */
export const WebhookDataSweepCreated$outboundSchema: z.ZodType<
  WebhookDataSweepCreated$Outbound,
  z.ZodTypeDef,
  WebhookDataSweepCreated
> = z.object({
  walletID: z.string(),
  sweepID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookDataSweepCreated$ {
  /** @deprecated use `WebhookDataSweepCreated$inboundSchema` instead. */
  export const inboundSchema = WebhookDataSweepCreated$inboundSchema;
  /** @deprecated use `WebhookDataSweepCreated$outboundSchema` instead. */
  export const outboundSchema = WebhookDataSweepCreated$outboundSchema;
  /** @deprecated use `WebhookDataSweepCreated$Outbound` instead. */
  export type Outbound = WebhookDataSweepCreated$Outbound;
}

export function webhookDataSweepCreatedToJSON(
  webhookDataSweepCreated: WebhookDataSweepCreated,
): string {
  return JSON.stringify(
    WebhookDataSweepCreated$outboundSchema.parse(webhookDataSweepCreated),
  );
}

export function webhookDataSweepCreatedFromJSON(
  jsonString: string,
): SafeParseResult<WebhookDataSweepCreated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookDataSweepCreated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookDataSweepCreated' from JSON`,
  );
}
