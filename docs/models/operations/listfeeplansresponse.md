# ListFeePlansResponse

## Example Usage

```typescript
import { ListFeePlansResponse } from "@moovio/sdk/models/operations";

let value: ListFeePlansResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      planID: "ee094952-77f0-44da-8dac-73c92cf541af",
      name: "Fixed Rate Merchant Plan",
      cardAcquiringModel: "cost-plus",
      billableFees: [
        {
          billableFeeID: "9d957d33-1a9a-47aa-9460-fe1a90f003dd",
          billableEvent: "card-auth-volume",
          feeName: "Card decline fee",
          feeModel: "fixed",
          feeCategory: "card-acquiring",
          feeProperties: {
            fixedAmount: {
              currency: "USD",
              valueDecimal: "0.1",
            },
          },
          feeConditions: {
            "transactionType": [
              "decline",
            ],
          },
        },
      ],
      minimumCommitment: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      createdAt: new Date("2023-04-18T16:03:25.952Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.FeePlan](../../models/components/feeplan.md)[] | :heavy_check_mark:                                         | N/A                                                        |