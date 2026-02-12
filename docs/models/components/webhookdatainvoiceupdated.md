# WebhookDataInvoiceUpdated

## Example Usage

```typescript
import { WebhookDataInvoiceUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataInvoiceUpdated = {
  accountID: "<id>",
  invoiceID: "<id>",
  status: "unpaid",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `invoiceID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `status`                                                             | [components.InvoiceStatus](../../models/components/invoicestatus.md) | :heavy_check_mark:                                                   | N/A                                                                  |