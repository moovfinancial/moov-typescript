# ListWalletTransactionsResponse

## Example Usage

```typescript
import { ListWalletTransactionsResponse } from "@moovio/sdk/models/operations";

let value: ListWalletTransactionsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      walletID: "cccc1e63-95bb-4dfc-82c9-95220cbdb2b8",
      transactionID: "eea631cf-0716-4960-afec-6bb509fb3868",
      transactionType: "issuing-transaction-adjustment",
      sourceType: "adjustment",
      sourceID: "b597c090-f841-45af-8134-c1e3bce3b568",
      status: "completed",
      memo: "<value>",
      createdOn: new Date("2025-10-27T18:37:54.806Z"),
      currency: "USD",
      grossAmount: 180628,
      grossAmountDecimal: "<value>",
      fee: 315164,
      feeDecimal: "<value>",
      netAmount: 807279,
      netAmountDecimal: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.WalletTransaction](../../models/components/wallettransaction.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |