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
      paymentMethodID: "937d4a71-5dfd-425d-a8cc-157fe6168e44",
      paymentMethodType: "ach-debit-fund",
      bankAccount: {
        bankAccountID: "8327ccf6-60da-4c7e-9016-1193aed31ff5",
        fingerprint: "<value>",
        status: "new",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "savings",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2025-05-30T02:30:37.371Z"),
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