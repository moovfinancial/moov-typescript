# GetInvoiceResponse

## Example Usage

```typescript
import { GetInvoiceResponse } from "@moovio/sdk/models/operations";

let value: GetInvoiceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    invoiceID: "bc3285ad-857f-484c-9f25-56b606e55259",
    invoiceNumber: "INV-1001",
    customerAccountID: "f8e9b163-ad46-4581-8dde-8e1a0734992c",
    partnerAccountID: "0836b0df-6dee-433c-9e89-31849af157e4",
    status: "draft",
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
    createdOn: new Date("2024-08-15T11:21:40.445Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Invoice](../../models/components/invoice.md) | :heavy_check_mark:                                       | N/A                                                      |