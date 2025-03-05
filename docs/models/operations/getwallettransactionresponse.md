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
    walletID: "1ce19949-61fa-4f2c-b6ea-202b078c7030",
    transactionID: "a003c68d-e6c3-42fa-bae0-4b7f72e0c073",
    transactionType: "facilitator-fee",
    sourceType: "transfer",
    sourceID: "c5a674c7-0f77-45a6-abe7-a4aa82b56da1",
    status: "pending",
    memo: "<value>",
    createdOn: new Date("2024-12-08T10:05:15.071Z"),
    currency: "USD",
    grossAmount: 394652,
    grossAmountDecimal: "<value>",
    fee: 812999,
    feeDecimal: "<value>",
    netAmount: 780179,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |