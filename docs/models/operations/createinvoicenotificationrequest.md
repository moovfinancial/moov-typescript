# CreateInvoiceNotificationRequest

## Example Usage

```typescript
import { CreateInvoiceNotificationRequest } from "@moovio/sdk/models/operations";

let value: CreateInvoiceNotificationRequest = {
  accountID: "<id>",
  invoiceID: "<id>",
  createInvoiceNotification: {
    channels: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `accountID`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `invoiceID`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createInvoiceNotification`                                                                  | [components.CreateInvoiceNotification](../../models/components/createinvoicenotification.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |