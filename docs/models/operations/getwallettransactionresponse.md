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
    walletID: "e922e12a-3d67-420c-a1a8-84c620593b17",
    transactionID: "d1082907-6277-41ae-89ab-ef7f5be0ee36",
    transactionType: "payout",
    sourceType: "sweep",
    sourceID: "e7ad11d7-c015-46d8-8e61-768a0926e236",
    status: "completed",
    memo: "<value>",
    createdOn: new Date("2023-03-26T21:44:52.578Z"),
    currency: "USD",
    grossAmount: 477044,
    grossAmountDecimal: "<value>",
    fee: 573379,
    feeDecimal: "<value>",
    netAmount: 749283,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |