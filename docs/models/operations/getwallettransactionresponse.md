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
    walletID: "d7c0156d-8e61-4768-ba09-26e23604179b",
    transactionID: "7a07d961-7e18-46c2-92ba-80dfaeca5107",
    transactionType: "facilitator-fee",
    sourceType: "transfer",
    sourceID: "3209121c-e199-4496-a1fa-f2c6ea202b07",
    status: "failed",
    memo: "<value>",
    createdOn: new Date("2024-05-04T11:13:51.388Z"),
    currency: "USD",
    grossAmount: 5486,
    grossAmountDecimal: "<value>",
    fee: 218782,
    feeDecimal: "<value>",
    netAmount: 47554,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |