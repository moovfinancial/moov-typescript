/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WebhookData,
  WebhookData$inboundSchema,
  WebhookData$Outbound,
  WebhookData$outboundSchema,
} from "./webhookdata.js";
import {
  WebhookEventType,
  WebhookEventType$inboundSchema,
  WebhookEventType$outboundSchema,
} from "./webhookeventtype.js";

/**
 * Webhook events are sent to your webhook URL when certain actions occur in the Moov API. You can subscribe to these events to receive real-time notifications.
 */
export type WebhookEvent = {
  /**
   * Unique identifier for the webhook event.
   */
  eventID: string;
  /**
   * The type of event that occurred.
   */
  type: WebhookEventType;
  /**
   * The data for the webhook event. The contents are based on the event type.
   */
  data: WebhookData;
  createdOn: Date;
};

/** @internal */
export const WebhookEvent$inboundSchema: z.ZodType<
  WebhookEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  eventID: z.string(),
  type: WebhookEventType$inboundSchema,
  data: WebhookData$inboundSchema,
  createdOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type WebhookEvent$Outbound = {
  eventID: string;
  type: string;
  data: WebhookData$Outbound;
  createdOn: string;
};

/** @internal */
export const WebhookEvent$outboundSchema: z.ZodType<
  WebhookEvent$Outbound,
  z.ZodTypeDef,
  WebhookEvent
> = z.object({
  eventID: z.string(),
  type: WebhookEventType$outboundSchema,
  data: WebhookData$outboundSchema,
  createdOn: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookEvent$ {
  /** @deprecated use `WebhookEvent$inboundSchema` instead. */
  export const inboundSchema = WebhookEvent$inboundSchema;
  /** @deprecated use `WebhookEvent$outboundSchema` instead. */
  export const outboundSchema = WebhookEvent$outboundSchema;
  /** @deprecated use `WebhookEvent$Outbound` instead. */
  export type Outbound = WebhookEvent$Outbound;
}

export function webhookEventToJSON(webhookEvent: WebhookEvent): string {
  return JSON.stringify(WebhookEvent$outboundSchema.parse(webhookEvent));
}

export function webhookEventFromJSON(
  jsonString: string,
): SafeParseResult<WebhookEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookEvent' from JSON`,
  );
}
