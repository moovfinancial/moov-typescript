# CreateInvoicePaymentResponse

## Example Usage

```typescript
import { CreateInvoicePaymentResponse } from "@moovio/sdk/models/operations";

let value: CreateInvoicePaymentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    invoicePaymentID: "<id>",
    invoicePaymentType: "external",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.InvoicePayment](../../models/components/invoicepayment.md) | :heavy_check_mark:                                                     | N/A                                                                    |