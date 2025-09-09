# GetWalletTransactionResponse

## Example Usage

```typescript
import { GetWalletTransactionResponse } from "@moovio/sdk/models/operations";

let value: GetWalletTransactionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    walletID: "ab57d4bc-5e7d-44af-9ca3-99382c296afe",
    transactionID: "bb0ed1a8-70aa-41d0-807b-e3a02ccd65b9",
    transactionType: "wallet-transfer",
    sourceType: "adjustment",
    sourceID: "0696c3fe-3140-40c8-8cc6-daa4fa67472b",
    status: "canceled",
    memo: "<value>",
    createdOn: new Date("2023-12-16T14:20:21.256Z"),
    currency: "USD",
    grossAmount: 465435,
    grossAmountDecimal: "<value>",
    fee: 199451,
    feeDecimal: "<value>",
    netAmount: 199911,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |