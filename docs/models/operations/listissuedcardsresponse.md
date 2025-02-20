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
      issuedCardID: "9d2ab51b-87d7-44b4-9431-cb6bf7784378",
      brand: "Visa",
      lastFourCardNumber: "<value>",
      expiration: {
        month: "01",
        year: "21",
      },
      authorizedUser: {
        firstName: "Kristofer",
        lastName: "Pollich",
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
      createdOn: new Date("2024-12-05T01:28:23.220Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.IssuedCard](../../models/components/issuedcard.md)[] | :heavy_check_mark:                                               | N/A                                                              |