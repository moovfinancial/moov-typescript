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
      walletID: "90f8415a-f134-4c1e-83bc-e3b56825f25c",
      transactionID: "23f66c12-b5b0-4982-b1e8-02a797edffb0",
      transactionType: "issuing-transaction",
      sourceType: "transfer",
      sourceID: "f97062b0-80bf-4018-9f69-ce2eac483d38",
      status: "pending",
      memo: "<value>",
      createdOn: new Date("2024-03-27T17:07:54.354Z"),
      currency: "USD",
      grossAmount: 784398,
      grossAmountDecimal: "<value>",
      fee: 528933,
      feeDecimal: "<value>",
      netAmount: 304797,
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