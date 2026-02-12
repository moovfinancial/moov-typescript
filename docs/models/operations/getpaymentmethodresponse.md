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
      status: "errored",
      holderName: "<value>",
      holderType: "individual",
      bankName: "<value>",
      bankAccountType: "checking",
      routingNumber: "<value>",
      lastFourAccountNumber: "<value>",
      updatedOn: new Date("2026-02-19T23:59:30.429Z"),
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |