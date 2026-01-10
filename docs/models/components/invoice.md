# Invoice

## Example Usage

```typescript
import { Invoice } from "@moovio/sdk/models/components";

let value: Invoice = {
  invoiceID: "3ea3eff8-41dc-460f-8e5e-0b479a6a2e86",
  invoiceNumber: "INV-1001",
  customerAccountID: "42335d9b-271a-4d19-b92d-a2836fe529da",
  partnerAccountID: "6464048b-14f1-4179-820e-a71055c798af",
  status: "canceled",
  lineItems: {
    items: [
      {
        name: "<value>",
        basePrice: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        quantity: 68821,
        options: [
          {
            name: "<value>",
            quantity: 352438,
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            images: [
              {
                imageID: "35fb4515-aa19-4ecd-ab01-f93615e83ee4",
                link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                publicID: "<id>",
              },
            ],
          },
        ],
        images: [
          {
            imageID: "35fb4515-aa19-4ecd-ab01-f93615e83ee4",
            link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
            publicID: "<id>",
          },
        ],
      },
    ],
  },
  subtotalAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  taxAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  totalAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  pendingAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  paidAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  refundedAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  disputedAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  invoicePayments: [
    {
      invoicePaymentID: "ee529bbb-9170-4ce5-b59a-2d3e43629e1d",
      invoicePaymentType: "external",
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  ],
  createdOn: new Date("2025-10-10T20:06:50.578Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `invoiceID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `invoiceNumber`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | INV-1001                                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `customerAccountID`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `partnerAccountID`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [components.InvoiceStatus](../../models/components/invoicestatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `lineItems`                                                                                   | [components.InvoiceLineItems](../../models/components/invoicelineitems.md)                    | :heavy_check_mark:                                                                            | A collection of line items for an invoice.                                                    |                                                                                               |
| `subtotalAmount`                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `taxAmount`                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `totalAmount`                                                                                 | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | Total amount of the invoice, sum of subTotalAmount and taxAmount                              |                                                                                               |
| `pendingAmount`                                                                               | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | Total amount of pending transfers paid towards the invoice                                    |                                                                                               |
| `paidAmount`                                                                                  | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | Total amount of completed transfers paid towards the invoice                                  |                                                                                               |
| `refundedAmount`                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | Total amount of refunds initiated against transfers paid towards the invoice                  |                                                                                               |
| `disputedAmount`                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | Total amount of disputes initiated against transfers paid towards the invoice                 |                                                                                               |
| `paymentLinkCode`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `invoicePayments`                                                                             | [components.InvoicePayment](../../models/components/invoicepayment.md)[]                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `invoiceDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `dueDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `sentOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `paidOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `canceledOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |