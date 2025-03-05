# RequestCardResponse

## Example Usage

```typescript
import { RequestCardResponse } from "@moovio/sdk/models/operations";

let value: RequestCardResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    issuedCardID: "31cb6bf7-7843-4784-99cb-2a067cebce74",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Hildegard",
      lastName: "Gutmann",
    },
    fundingWalletID: "<id>",
    state: "closed",
    formFactor: "virtual",
    controls: {
      velocityLimits: [
        {
          amount: 10000,
          interval: "per-transaction",
        },
      ],
    },
    createdOn: new Date("2025-12-23T14:09:59.555Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.IssuedCard](../../models/components/issuedcard.md) | :heavy_check_mark:                                             | N/A                                                            |