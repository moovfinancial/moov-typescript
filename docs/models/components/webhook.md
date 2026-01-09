# Webhook

A configured webhook endpoint that receives event notifications.

## Example Usage

```typescript
import { Webhook } from "@moovio/sdk/models/components";

let value: Webhook = {
  webhookID: "cbaea92a-d065-47e9-bddf-3491757c3776",
  url: "https://fuzzy-sock.org",
  status: "disabled",
  eventTypes: [],
  description: "between maroon divert wafer crushing",
  createdOn: new Date("2024-06-28T04:16:58.387Z"),
  updatedOn: new Date("2024-02-17T19:49:14.383Z"),
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