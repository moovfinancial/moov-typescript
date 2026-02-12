# GetWalletTransactionResponse

## Example Usage

```typescript
import { GetWalletTransactionResponse } from "@moovio/sdk/models/operations";

let value: GetWalletTransactionResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    walletID: "<id>",
    transactionID: "<id>",
    transactionType: "moov-fee",
    sourceType: "adjustment",
    sourceID: "<id>",
    status: "completed",
    memo: "<value>",
    createdOn: new Date("2025-06-22T18:29:55.677Z"),
    currency: "USD",
    grossAmount: 862334,
    grossAmountDecimal: "<value>",
    fee: 282756,
    feeDecimal: "<value>",
    netAmount: 735014,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |