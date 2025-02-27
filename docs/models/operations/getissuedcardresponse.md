# GetIssuedCardResponse

## Example Usage

```typescript
import { GetIssuedCardResponse } from "@moovio/sdk/models/operations";

let value: GetIssuedCardResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    issuedCardID: "6bf77843-7849-4cb2-ba06-7cebce745654",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Zachary",
      lastName: "Schroeder",
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
    createdOn: new Date("2025-01-17T14:16:00.694Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.IssuedCard](../../models/components/issuedcard.md) | :heavy_check_mark:                                             | N/A                                                            |