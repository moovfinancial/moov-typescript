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
    paymentMethodID: "2b519202-6ba0-4c5a-b060-d2a42e9e4df6",
    paymentMethodType: "ach-credit-standard",
    bankAccount: {
      bankAccountID: "55ff3d5f-de94-438a-bb28-638483e591a4",
      fingerprint: "<value>",
      status: "verified",
      holderName: "<value>",
      holderType: "business",
      bankName: "<value>",
      bankAccountType: "checking",
      routingNumber: "<value>",
      lastFourAccountNumber: "<value>",
      updatedOn: new Date("2025-08-02T04:16:12.146Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |