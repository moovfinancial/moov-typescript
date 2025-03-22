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
      cardTransactionID: "551db6b5-e817-4505-8f4b-22407f4adf0d",
      issuedCardID: "5b50b876-ae66-453d-b38c-0861d65a7585",
      fundingWalletID: "ccc8d4e6-8201-40cc-9692-d95db6532750",
      amount: "-14.89",
      authorizedOn: new Date("2023-05-27T13:52:53.446Z"),
      merchantData: {
        name: "Whole Body Fitness",
        city: "San Francisco",
        country: "US",
        postalCode: "94107",
        state: "CA",
        mcc: "7298",
      },
      createdOn: new Date("2025-05-29T02:01:29.899Z"),
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |