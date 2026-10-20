# InvoiceNotificationLimitedChannel

## Example Usage

```typescript
import { InvoiceNotificationLimitedChannel } from "@moovio/sdk/models/components";

let value: InvoiceNotificationLimitedChannel = {
  channel: "email",
  availableOn: new Date("2025-01-21T15:59:01.394Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `channel`                                                                                     | [components.NotificationChannel](../../models/components/notificationchannel.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `availableOn`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When a notification to the channel can be sent again.                                         |