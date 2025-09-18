# WebhookEvent

Webhook events are sent to your webhook URL when certain actions occur in the Moov API. You can subscribe to these events to receive real-time notifications.

## Example Usage

```typescript
import { WebhookEvent } from "@moovio/sdk/models/components";

let value: WebhookEvent = {
  eventID: "f08758f0-91c3-4b27-a7f8-0512cef9f555",
  type: "billingStatement.created",
  data: {
    accountID: "95328e1d-0160-4129-a329-5aedc05109bd",
    representativeID: "cce0d79c-bead-4938-9576-b578321dde44",
  },
  createdOn: new Date("2024-02-21T04:33:12.220Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventID`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the webhook event.                                                      |
| `type`                                                                                        | [components.WebhookEventType](../../models/components/webhookeventtype.md)                    | :heavy_check_mark:                                                                            | The type of event that occurred.                                                              |
| `data`                                                                                        | *components.WebhookData*                                                                      | :heavy_check_mark:                                                                            | The data for the webhook event. The contents are based on the event type.                     |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |