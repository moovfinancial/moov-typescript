# GetWalletTransactionResponse

## Example Usage

```typescript
import { GetWalletTransactionResponse } from "@moovio/sdk/models/operations";

let value: GetWalletTransactionResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    walletID: "82907627-71ae-49ab-bef7-f5be0ee361bc",
    transactionID: "7ad11d7c-0156-4d8e-9617-68a0926e2360",
    transactionType: "ach-reversal",
    sourceType: "issuing-card-transaction",
    sourceID: "9be7a07d-9617-4e18-86c2-2ba80dfaeca5",
    status: "pending",
    memo: "<value>",
    createdOn: new Date("2024-05-08T19:34:14.084Z"),
    currency: "USD",
    grossAmount: 459536,
    grossAmountDecimal: "<value>",
    fee: 386185,
    feeDecimal: "<value>",
    netAmount: 29923,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |