# ListIssuedCardTransactionsResponse

## Example Usage

```typescript
import { ListIssuedCardTransactionsResponse } from "@moovio/sdk/models/operations";

let value: ListIssuedCardTransactionsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      cardTransactionID: "b46f9ab7-67d5-4e04-bee3-3c5334d72551",
      issuedCardID: "b6b5e817-505f-44b2-8240-7f4adf0d15b5",
      fundingWalletID: "b876ae66-53d3-48c0-a861-d65a7585cccc",
      amount: "-14.89",
      authorizedOn: new Date("2025-06-17T19:03:37.149Z"),
      merchantData: {
        name: "Whole Body Fitness",
        city: "San Francisco",
        country: "US",
        postalCode: "94107",
        state: "CA",
        mcc: "7298",
      },
      createdOn: new Date("2023-10-22T06:11:31.101Z"),
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |