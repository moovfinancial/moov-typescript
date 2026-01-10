# CreateInvoicePaymentResponse

## Example Usage

```typescript
import { CreateInvoicePaymentResponse } from "@moovio/sdk/models/operations";

let value: CreateInvoicePaymentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    invoicePaymentID: "a76035b3-87ca-467c-96af-be4a6ddf2f2f",
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