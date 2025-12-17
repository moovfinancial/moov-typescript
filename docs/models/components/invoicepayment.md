# InvoicePayment

Payment made towards an invoice, will be either a transfer or an external payment.

## Example Usage

```typescript
import { InvoicePayment } from "@moovio/sdk/models/components";

let value: InvoicePayment = {
  paymentType: "transfer",
  external: {
    paymentType: "external",
    description: "before save so loftily although stunning lest",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `paymentType`                                                                          | [components.InvoicePaymentType](../../models/components/invoicepaymenttype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `transfer`                                                                             | [components.InvoiceTransferPayment](../../models/components/invoicetransferpayment.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `external`                                                                             | [components.InvoiceExternalPayment](../../models/components/invoiceexternalpayment.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |