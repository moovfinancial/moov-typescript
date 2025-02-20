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
    walletID: "ee361bce-7ad1-41d7-ac01-56d8e61768a0",
    transactionID: "26e23604-179b-4e7a-a07d-9617e186c22b",
    transactionType: "issuing-transaction-adjustment",
    sourceType: "transfer",
    sourceID: "dfaeca51-0776-4032-a091-21ce1994961f",
    status: "failed",
    memo: "<value>",
    createdOn: new Date("2023-06-15T12:31:01.479Z"),
    currency: "USD",
    grossAmount: 794154,
    grossAmountDecimal: "<value>",
    fee: 420626,
    feeDecimal: "<value>",
    netAmount: 929687,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |