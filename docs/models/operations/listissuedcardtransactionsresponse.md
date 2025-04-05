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
      cardTransactionID: "6bccf828-0f22-4493-8126-310e4a60a857",
      issuedCardID: "966e536a-5eeb-400f-8087-8746ab012094",
      fundingWalletID: "b7c79950-cc16-4d1e-b403-57b58ae4a604",
      amount: "-14.89",
      authorizedOn: new Date("2023-12-10T08:50:32.374Z"),
      merchantData: {
        name: "Whole Body Fitness",
        city: "San Francisco",
        country: "US",
        postalCode: "94107",
        state: "CA",
        mcc: "7298",
      },
      createdOn: new Date("2025-10-24T07:06:09.289Z"),
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |