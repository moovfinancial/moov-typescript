# CreateInvoiceResponse

## Example Usage

```typescript
import { CreateInvoiceResponse } from "@moovio/sdk/models/operations";

let value: CreateInvoiceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    invoiceID: "<id>",
    invoiceNumber: "INV-1001",
    customerAccountID: "<id>",
    partnerAccountID: "<id>",
    status: "overdue",
    lineItems: {
      items: [
        {
          name: "<value>",
          basePrice: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          quantity: 200568,
          options: [
            {
              name: "<value>",
              quantity: 163512,
              priceModifier: {
                currency: "USD",
                valueDecimal: "12.987654321",
              },
              images: [
                {
                  imageID: "<id>",
                  link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                  publicID: "<id>",
                },
              ],
            },
          ],
          images: [
            {
              imageID: "<id>",
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
        invoicePaymentID: "<id>",
        invoicePaymentType: "external",
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    ],
    createdOn: new Date("2025-02-09T19:49:01.456Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Invoice](../../models/components/invoice.md) | :heavy_check_mark:                                       | N/A                                                      |