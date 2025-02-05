# ListPaymentLinksResponse

## Example Usage

```typescript
import { ListPaymentLinksResponse } from "@moovio/sdk/models/operations";

let value: ListPaymentLinksResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      code: "3QLHtONjd5",
      mode: "sandbox",
      status: "active",
      partnerAccountID: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      merchantAccountID: "34233b72-780c-4e0e-8b08-cbbe1bc878f8",
      merchantPaymentMethodID: "4c4e7f8e-81f4-4f3d-8f6f-6f6e7f8e4c4e",
      link: "https://moov.money/3QLHtONjd5",
      amount: {
        currency: "USD",
        value: 10000,
      },
      uses: 0,
      display: {
        title: "Example Payment Link",
        description: "This is an example payment link.",
        callToAction: "pay",
      },
      customer: {
        requirePhone: true,
      },
      payment: {
        allowedMethods: [
          "card-payment",
          "ach-debit-collect",
        ],
      },
      createdOn: new Date("2025-01-09T17:09:13.33Z"),
      updatedOn: new Date("2025-01-09T17:09:13.33Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.PaymentLink](../../models/components/paymentlink.md)[] | :heavy_check_mark:                                                 | N/A                                                                |