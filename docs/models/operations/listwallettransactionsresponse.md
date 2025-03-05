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
      walletID: "b080bf01-8f69-4ce2-9eac-483d38606c84",
      transactionID: "ca183fb1-315d-4124-89fd-3b87e922e12a",
      transactionType: "refund-failure",
      sourceType: "issuing-card-transaction",
      sourceID: "720c1a88-4c62-4059-93b1-78d108290762",
      status: "completed",
      memo: "<value>",
      createdOn: new Date("2023-03-16T09:33:11.695Z"),
      currency: "USD",
      grossAmount: 676908,
      grossAmountDecimal: "<value>",
      fee: 913700,
      feeDecimal: "<value>",
      netAmount: 613443,
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