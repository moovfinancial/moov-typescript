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
    walletID: "030fa003-c68d-4e6c-b32f-aae04b7f72e0",
    transactionID: "073f60c5-a674-4c70-af77-5a6be7a4aa82",
    transactionType: "dispute",
    sourceType: "issuing-card-transaction",
    sourceID: "da191a6d-cf42-4295-8e1c-7a98b8e8ecde",
    status: "completed",
    memo: "<value>",
    createdOn: new Date("2025-09-12T17:07:56.815Z"),
    currency: "USD",
    grossAmount: 149214,
    grossAmountDecimal: "<value>",
    fee: 490145,
    feeDecimal: "<value>",
    netAmount: 104748,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |