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
      walletID: "631cf071-6960-4fec-a6bb-509fb3868b7e",
      transactionID: "597c090f-8415-4af1-934c-1e3bce3b5682",
      transactionType: "wallet-transfer",
      sourceType: "dispute",
      sourceID: "5c323f66-c12b-45b0-b982-1e802a797edf",
      status: "canceled",
      memo: "<value>",
      createdOn: new Date("2023-02-27T13:45:36.700Z"),
      currency: "USD",
      grossAmount: 999102,
      grossAmountDecimal: "<value>",
      fee: 473319,
      feeDecimal: "<value>",
      netAmount: 60997,
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