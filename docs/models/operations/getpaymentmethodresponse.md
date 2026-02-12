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
    paymentMethodType: "rtp-credit",
    bankAccount: {
      bankAccountID: "<id>",
      fingerprint: "<value>",
      status: "verified",
      holderName: "<value>",
      holderType: "business",
      bankName: "<value>",
      bankAccountType: "checking",
      routingNumber: "<value>",
      lastFourAccountNumber: "<value>",
      updatedOn: new Date("2024-09-12T06:36:19.592Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |