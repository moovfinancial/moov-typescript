# GetPaymentMethodResponse

## Example Usage

```typescript
import { GetPaymentMethodResponse } from "@moovio/sdk/models/operations";

let value: GetPaymentMethodResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    paymentMethodID: "d8427e01-b4a2-464c-a827-4e4f5fd3e5db",
    paymentMethodType: "ach-credit-same-day",
    bankAccount: {
      bankAccountID: "f18e4c2f-2a37-4d70-8c03-4f68e51af743",
      fingerprint: "<value>",
      status: "verified",
      holderName: "<value>",
      holderType: "business",
      bankName: "<value>",
      bankAccountType: "checking",
      routingNumber: "<value>",
      lastFourAccountNumber: "<value>",
      updatedOn: new Date("2023-02-06T21:08:20.521Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |