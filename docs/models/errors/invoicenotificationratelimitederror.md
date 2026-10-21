# InvoiceNotificationRateLimitedError

## Example Usage

```typescript
import { InvoiceNotificationRateLimitedError } from "@moovio/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | A description of the rate limit error.                                                                         |
| `limitedChannels`                                                                                              | [components.InvoiceNotificationLimitedChannel](../../models/components/invoicenotificationlimitedchannel.md)[] | :heavy_check_mark:                                                                                             | The requested channels that are rate limited.                                                                  |
| `availableChannels`                                                                                            | [components.NotificationChannel](../../models/components/notificationchannel.md)[]                             | :heavy_check_mark:                                                                                             | The requested channels that are not rate limited and can be sent in a new request.                             |