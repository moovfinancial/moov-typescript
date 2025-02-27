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
      issuedCardID: "89ffe9e5-388e-40d9-9fb5-a5e088364acc",
      brand: "Visa",
      lastFourCardNumber: "<value>",
      expiration: {
        month: "01",
        year: "21",
      },
      authorizedUser: {
        firstName: "Claude",
        lastName: "Lesch",
      },
      fundingWalletID: "<id>",
      state: "pending-verification",
      formFactor: "virtual",
      controls: {
        velocityLimits: [
          {
            amount: 10000,
            interval: "per-transaction",
          },
        ],
      },
      createdOn: new Date("2025-05-21T04:20:19.703Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.IssuedCard](../../models/components/issuedcard.md)[] | :heavy_check_mark:                                               | N/A                                                              |