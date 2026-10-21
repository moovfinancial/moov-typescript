# CreateInvoiceNotification

## Example Usage

```typescript
import { CreateInvoiceNotification } from "@moovio/sdk/models/components";

let value: CreateInvoiceNotification = {
  channels: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `channels`                                                                             | [components.NotificationChannel](../../models/components/notificationchannel.md)[]     | :heavy_check_mark:                                                                     | The channels to send the notification on. Required, must contain at least one channel. |