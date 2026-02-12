# ListFeePlansResponse

## Example Usage

```typescript
import { ListFeePlansResponse } from "@moovio/sdk/models/operations";

let value: ListFeePlansResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      planID: "<id>",
      name: "Fixed Rate Merchant Plan",
      cardAcquiringModel: "flat-rate",
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
            volumeRanges: [
              {
                fromValue: 1,
                toValue: 2,
                flatAmount: {
                  currency: "USD",
                  valueDecimal: "1.23",
                },
                perUnitAmount: {
                  currency: "USD",
                  valueDecimal: "1.23",
                },
              },
            ],
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
      monthlyPlatformFee: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      createdAt: new Date("2025-11-22T01:30:27.323Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.FeePlan](../../models/components/feeplan.md)[] | :heavy_check_mark:                                         | N/A                                                        |