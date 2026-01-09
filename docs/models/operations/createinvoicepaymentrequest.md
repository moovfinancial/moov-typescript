# CreateInvoicePaymentRequest

## Example Usage

```typescript
import { CreateInvoicePaymentRequest } from "@moovio/sdk/models/operations";

let value: CreateInvoicePaymentRequest = {
  accountID: "5079b134-b89e-41bb-95ab-e1c3df70f943",
  invoiceID: "3caf6799-38a6-44ad-a3b6-bd8652304f3e",
  createInvoicePayment: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `invoiceID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createInvoicePayment`                                                             | [components.CreateInvoicePayment](../../models/components/createinvoicepayment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |