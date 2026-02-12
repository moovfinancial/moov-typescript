# Webhook

A configured webhook endpoint that receives event notifications.

## Example Usage

```typescript
import { Webhook } from "@moovio/sdk/models/components";

let value: Webhook = {
  webhookID: "<id>",
  url: "https://sad-outlaw.org",
  status: "disabled",
  eventTypes: [
    "bankAccount.updated",
  ],
  description: "overcook as loosely total gosh absent hmph for",
  createdOn: new Date("2026-01-29T16:35:26.923Z"),
  updatedOn: new Date("2026-12-04T00:18:18.481Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `webhookID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the webhook.                                                            |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The URL where webhook events will be sent.                                                    |
| `status`                                                                                      | [components.WebhookStatus](../../models/components/webhookstatus.md)                          | :heavy_check_mark:                                                                            | The status of a webhook.                                                                      |
| `eventTypes`                                                                                  | [components.WebhookEventType](../../models/components/webhookeventtype.md)[]                  | :heavy_check_mark:                                                                            | The list of event types this webhook is subscribed to.                                        |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A description of the webhook for reference.                                                   |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of when the webhook was created.                                                    |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of when the webhook was last updated.                                               |
| `lastUsedOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of when the webhook last received an event.                                         |