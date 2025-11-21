# CreateInvoiceResponse

## Example Usage

```typescript
import { CreateInvoiceResponse } from "@moovio/sdk/models/operations";

let value: CreateInvoiceResponse = {
  headers: {
    "key": [],
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
      items: [],
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
        paymentType: "external",
        description: "if esteemed overheard",
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    ],
    createdOn: new Date("2024-10-05T23:48:46.672Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Invoice](../../models/components/invoice.md) | :heavy_check_mark:                                       | N/A                                                      |