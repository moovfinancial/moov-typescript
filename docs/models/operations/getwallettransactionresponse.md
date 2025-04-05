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
    walletID: "2ab57d4b-c5e7-4d4a-bfca-399382c296af",
    transactionID: "7bb0ed1a-870a-4a1d-a007-be3a02ccd65b",
    transactionType: "card-decline",
    sourceType: "fee",
    sourceID: "a0696c3f-e314-400c-a8cc-6daa4fa67472",
    status: "pending",
    memo: "<value>",
    createdOn: new Date("2024-12-12T22:20:53.131Z"),
    currency: "USD",
    grossAmount: 318976,
    grossAmountDecimal: "<value>",
    fee: 465435,
    feeDecimal: "<value>",
    netAmount: 199451,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |