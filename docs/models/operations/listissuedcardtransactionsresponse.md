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
      cardTransactionID: "8f892944-6a94-4037-ae9e-975f75ec9971",
      issuedCardID: "60b2c499-27df-4029-b0c9-a991375ca4fa",
      fundingWalletID: "e3602987-b46f-49ab-8767-d5e04ee33c53",
      amount: "-14.89",
      authorizedOn: new Date("2023-11-30T09:15:45.832Z"),
      merchantData: {
        name: "Whole Body Fitness",
        city: "San Francisco",
        country: "US",
        postalCode: "94107",
        state: "CA",
        mcc: "7298",
      },
      createdOn: new Date("2025-07-01T22:54:53.733Z"),
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |