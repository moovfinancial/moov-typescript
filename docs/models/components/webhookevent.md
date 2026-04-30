# WebhookEvent

Webhook events are sent to your webhook URL when certain actions occur in the Moov API. You can subscribe to these events to receive real-time notifications.

## Example Usage

```typescript
import { WebhookEvent } from "@moovio/sdk/models/components";

let value: WebhookEvent = {
  eventID: "<id>",
  type: "walletTransaction.updated",
  data: {
    accountID: "<id>",
  },
  createdOn: new Date("2025-07-28T10:02:51.091Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventID`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the webhook event.                                                      |
| `type`                                                                                        | [components.WebhookEventType](../../models/components/webhookeventtype.md)                    | :heavy_check_mark:                                                                            | The type of event that occurred.                                                              |
| `data`                                                                                        | *components.WebhookData*                                                                      | :heavy_check_mark:                                                                            | The data for the webhook event. The contents are based on the event type.                     |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |