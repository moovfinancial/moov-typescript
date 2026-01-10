# InvoicePayment

Payment made towards an invoice, will be either a transfer or an external payment.

## Example Usage

```typescript
import { InvoicePayment } from "@moovio/sdk/models/components";

let value: InvoicePayment = {
  invoicePaymentID: "0d4bdcfc-499c-4fed-b7b0-df310ba1d552",
  invoicePaymentType: "external",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `invoicePaymentID`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `invoicePaymentType`                                                                   | [components.InvoicePaymentType](../../models/components/invoicepaymenttype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `amount`                                                                               | [components.AmountDecimal](../../models/components/amountdecimal.md)                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `transfer`                                                                             | [components.InvoiceTransferPayment](../../models/components/invoicetransferpayment.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `external`                                                                             | [components.InvoiceExternalPayment](../../models/components/invoiceexternalpayment.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |