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
      walletID: "9fd3b87e-922e-412a-83d6-720c1a884c62",
      transactionID: "593b178d-1082-4907-a627-71ae9abef7f5",
      transactionType: "wallet-transfer",
      sourceType: "transfer",
      sourceID: "ee361bce-7ad1-41d7-ac01-56d8e61768a0",
      status: "pending",
      memo: "<value>",
      createdOn: new Date("2024-04-18T06:24:50.359Z"),
      currency: "USD",
      grossAmount: 892331,
      grossAmountDecimal: "<value>",
      fee: 133836,
      feeDecimal: "<value>",
      netAmount: 208759,
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