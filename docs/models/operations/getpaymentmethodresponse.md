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
    paymentMethodID: "fde9438a-b286-4384-b83e-591a4f693dc3",
    paymentMethodType: "ach-credit-standard",
    bankAccount: {
      bankAccountID: "0c7d713f-52c0-4140-9fb8-ca23d5760b8a",
      fingerprint: "<value>",
      status: "verificationFailed",
      holderName: "<value>",
      holderType: "individual",
      bankName: "<value>",
      bankAccountType: "savings",
      routingNumber: "<value>",
      lastFourAccountNumber: "<value>",
      updatedOn: new Date("2024-12-17T05:26:17.145Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |