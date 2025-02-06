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
    paymentMethodID: "a8327ccf-660d-4ac7-9e01-61193aed31ff",
    paymentMethodType: "ach-credit-standard",
    bankAccount: {
      bankAccountID: "72b6c905-cbaa-49a9-88c5-763505613335",
      fingerprint: "<value>",
      status: "pending",
      holderName: "<value>",
      holderType: "individual",
      bankName: "<value>",
      bankAccountType: "checking",
      routingNumber: "<value>",
      lastFourAccountNumber: "<value>",
      updatedOn: new Date("2024-10-12T14:02:55.133Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |