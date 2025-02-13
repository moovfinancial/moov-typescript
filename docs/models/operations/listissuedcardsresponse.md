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
      issuedCardID: "b4431cb6-bf77-4843-b784-9cb2a067cebc",
      brand: "Visa",
      lastFourCardNumber: "<value>",
      expiration: {
        month: "01",
        year: "21",
      },
      authorizedUser: {
        firstName: "Jazmyn",
        lastName: "Hilpert",
      },
      fundingWalletID: "<id>",
      state: "inactive",
      formFactor: "virtual",
      controls: {
        velocityLimits: [
          {
            amount: 10000,
            interval: "per-transaction",
          },
        ],
      },
      createdOn: new Date("2023-12-13T12:05:42.154Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.IssuedCard](../../models/components/issuedcard.md)[] | :heavy_check_mark:                                               | N/A                                                              |