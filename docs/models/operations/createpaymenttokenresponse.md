# CreatePaymentTokenResponse

## Example Usage

```typescript
import { CreatePaymentTokenResponse } from "@moovio/sdk/models/operations";

let value: CreatePaymentTokenResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    token: "<value>",
    type: "card",
    expiresOn: new Date("2025-09-29T23:31:58.733Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.PaymentToken](../../models/components/paymenttoken.md) | :heavy_check_mark:                                                 | N/A                                                                |