# UpdateInvoiceResponse

## Example Usage

```typescript
import { UpdateInvoiceResponse } from "@moovio/sdk/models/operations";

let value: UpdateInvoiceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    invoiceID: "bc3285ad-857f-484c-9f25-56b606e55259",
    invoiceNumber: "INV-1001",
    description:
      "far before quietly crank separately trash drab book inside dissemble",
    customerAccountID: "515aa19e-cdb0-41f9-a361-5e83ee4aee52",
    partnerAccountID: "bbb9170c-e559-4a2d-a3e4-3629e1dca367",
    status: "canceled",
    lineItems: {
      items: [
        {
          name: "<value>",
          basePrice: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          quantity: 108714,
          options: [
            {
              name: "<value>",
              quantity: 11853,
              priceModifier: {
                currency: "USD",
                valueDecimal: "12.987654321",
              },
              images: [
                {
                  imageID: "4925642d-ae6d-43c8-bb16-aa953186a0b9",
                  link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                  publicID: "<id>",
                },
              ],
            },
          ],
          images: [
            {
              imageID: "4925642d-ae6d-43c8-bb16-aa953186a0b9",
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
    payments: [
      {
        paymentType: "transfer",
        transferID: "902d12a1-f845-414c-ae9b-09696afa3279",
      },
    ],
    createdOn: new Date("2023-03-11T04:38:05.353Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Invoice](../../models/components/invoice.md) | :heavy_check_mark:                                       | N/A                                                      |