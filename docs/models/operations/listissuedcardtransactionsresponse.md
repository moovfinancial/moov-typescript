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
      cardTransactionID: "cef04e04-8b34-4378-8ecb-9514333665e3",
      issuedCardID: "1e3958ad-8529-42d0-ad37-bc67054642f6",
      fundingWalletID: "e92cc686-3cba-4774-b4dd-0b5e35b1ba4b",
      amount: "-14.89",
      authorizedOn: new Date("2025-05-31T02:52:11.535Z"),
      merchantData: {
        name: "Whole Body Fitness",
        city: "San Francisco",
        country: "US",
        postalCode: "94107",
        state: "CA",
        mcc: "7298",
      },
      createdOn: new Date("2024-07-21T13:19:29.931Z"),
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |