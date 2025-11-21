# WebhookDataInvoiceUpdated

## Example Usage

```typescript
import { WebhookDataInvoiceUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataInvoiceUpdated = {
  accountID: "371dff31-c951-4036-a585-7983e2429f4d",
  invoiceID: "9a2686a6-add0-49a0-b309-e9070e1656f0",
  status: "draft",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `invoiceID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `status`                                                             | [components.InvoiceStatus](../../models/components/invoicestatus.md) | :heavy_check_mark:                                                   | N/A                                                                  |