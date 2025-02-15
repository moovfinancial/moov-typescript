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
      walletID: "33cccc1e-6395-4bbd-afc2-c995220cbdb2",
      transactionID: "81eea631-cf07-4169-960f-ec6bb509fb38",
      transactionType: "issuing-auth-hold",
      sourceType: "sweep",
      sourceID: "7eb597c0-90f8-4415-9af1-34c1e3bce3b5",
      status: "canceled",
      memo: "<value>",
      createdOn: new Date("2023-05-24T18:23:37.331Z"),
      currency: "USD",
      grossAmount: 358724,
      grossAmountDecimal: "<value>",
      fee: 940490,
      feeDecimal: "<value>",
      netAmount: 180628,
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