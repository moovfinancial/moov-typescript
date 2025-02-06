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
      planID: "b4dc35d3-55c0-4196-aa4e-c1cffb194fb9",
      name: "Fixed Rate Merchant Plan",
      cardAcquringModel: "cost-plus",
      billableFees: [
        {
          billableEvent: "ach-volume",
          feeName: "ACH Direct Debit",
          feeModel: "fixed",
          feeCategory: "other",
          feeProperties: {
            fixedAmount: {
              currency: "USD",
              valueDecimal: "0.0195",
            },
            variableRate: "0.15",
            minPerTransaction: {
              currency: "USD",
              valueDecimal: "0.0195",
            },
            maxPerTransaction: {
              currency: "USD",
              valueDecimal: "0.035",
            },
          },
          feeConditions: {
            "cardBrand": [
              "visa",
            ],
          },
        },
      ],
      createdAt: new Date("2023-12-30T19:00:40.873Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.FeePlan](../../models/components/feeplan.md)[] | :heavy_check_mark:                                         | N/A                                                        |