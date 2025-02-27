# ListPaymentMethodsResponse

## Example Usage

```typescript
import { ListPaymentMethodsResponse } from "@moovio/sdk/models/operations";

let value: ListPaymentMethodsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      paymentMethodID: "61193aed-31ff-4572-9b6c-905cbaa9a98c",
      paymentMethodType: "ach-debit-fund",
      bankAccount: {
        bankAccountID: "76350561-3335-42b5-b192-026ba0c5a060",
        fingerprint: "<value>",
        status: "new",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "savings",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-05-29T08:16:32.561Z"),
      },
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `headers`                    | Record<string, *string*[]>   | :heavy_check_mark:           | N/A                          |
| `result`                     | *components.PaymentMethod*[] | :heavy_check_mark:           | N/A                          |