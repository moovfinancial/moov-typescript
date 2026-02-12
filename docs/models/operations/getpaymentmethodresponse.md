# GetPaymentMethodResponse

## Example Usage

```typescript
import { GetPaymentMethodResponse } from "@moovio/sdk/models/operations";

let value: GetPaymentMethodResponse = {
  headers: {
    "key": [],
  },
  result: {
    paymentMethodID: "<id>",
    paymentMethodType: "ach-credit-same-day",
    bankAccount: {
      bankAccountID: "<id>",
      fingerprint: "<value>",
      status: "verified",
      holderName: "<value>",
      holderType: "business",
      bankName: "<value>",
      bankAccountType: "loan",
      routingNumber: "<value>",
      lastFourAccountNumber: "<value>",
      updatedOn: new Date("2026-10-09T09:15:43.090Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |