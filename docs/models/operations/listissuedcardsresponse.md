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
      issuedCardID: "904a9eec-25f7-45fb-8b61-f1a000f79278",
      brand: "Visa",
      lastFourCardNumber: "<value>",
      expiration: {
        month: "01",
        year: "21",
      },
      authorizedUser: {
        firstName: "Jade",
        lastName: "Mayer",
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
      createdOn: new Date("2025-11-13T00:46:26.369Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.IssuedCard](../../models/components/issuedcard.md)[] | :heavy_check_mark:                                               | N/A                                                              |