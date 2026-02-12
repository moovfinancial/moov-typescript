# CreateInvoicePaymentRequest

## Example Usage

```typescript
import { CreateInvoicePaymentRequest } from "@moovio/sdk/models/operations";

let value: CreateInvoicePaymentRequest = {
  accountID: "<id>",
  invoiceID: "<id>",
  createInvoicePayment: {
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `invoiceID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createInvoicePayment`                                                             | [components.CreateInvoicePayment](../../models/components/createinvoicepayment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |