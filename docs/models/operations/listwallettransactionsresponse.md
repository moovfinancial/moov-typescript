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
      walletID: "efd561eb-f2e0-4f67-8eab-4ed2bb5da00d",
      transactionID: "c8a4127d-65ab-4f53-9171-58321f533219",
      transactionType: "issuing-transaction",
      sourceType: "transfer",
      sourceID: "0175c756-a489-4f31-af55-8915ed8fd37d",
      status: "failed",
      memo: "<value>",
      createdOn: new Date("2024-04-17T23:01:34.851Z"),
      currency: "USD",
      grossAmount: 982380,
      grossAmountDecimal: "<value>",
      fee: 315945,
      feeDecimal: "<value>",
      netAmount: 19994,
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