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
      planID: "77f04dad-ac73-4c92-8cf5-41af2710ad5e",
      name: "Fixed Rate Merchant Plan",
      cardAcquringModel: "cost-plus",
      billableFees: [
        {
          billableEvent: "ach-volume",
          feeName: "ACH Direct Debit",
          feeModel: "blended",
          feeCategory: "rtp",
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
      createdAt: new Date("2024-10-28T13:53:32.868Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.FeePlan](../../models/components/feeplan.md)[] | :heavy_check_mark:                                         | N/A                                                        |