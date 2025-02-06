# ListIssuedCardsResponse

## Example Usage

```typescript
import { ListIssuedCardsResponse } from "@moovio/sdk/models/operations";

let value: ListIssuedCardsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      issuedCardID: "cb2b1eb1-dab7-4969-9c3e-42a84ab41845",
      brand: "Visa",
      lastFourCardNumber: "<value>",
      expiration: {
        month: "01",
        year: "21",
      },
      authorizedUser: {
        firstName: "Morton",
        lastName: "Kris",
      },
      fundingWalletID: "<id>",
      state: "active",
      formFactor: "virtual",
      controls: {
        velocityLimits: [
          {
            amount: 10000,
            interval: "per-transaction",
          },
        ],
      },
      createdOn: new Date("2025-07-24T03:18:16.802Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.IssuedCard](../../models/components/issuedcard.md)[] | :heavy_check_mark:                                               | N/A                                                              |