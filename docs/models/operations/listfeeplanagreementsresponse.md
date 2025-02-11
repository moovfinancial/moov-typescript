# ListFeePlanAgreementsResponse

## Example Usage

```typescript
import { ListFeePlanAgreementsResponse } from "@moovio/sdk/models/operations";

let value: ListFeePlanAgreementsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      aggreementID: "b9f72a99-8f21-4239-b937-77c7c28d2792",
      planID: "1f7516a1-4da3-42e4-82f4-176e211e7298",
      acceptedOn: new Date("2024-10-22T22:18:54.790Z"),
      status: "active",
      cardAcquringModel: "cost-plus",
      billableFees: [
        {
          billableEvent: "ach-volume",
          feeName: "ACH Direct Debit",
          feeModel: "blended",
          feeCategory: "card-pull",
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
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.FeePlanAgreement](../../models/components/feeplanagreement.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |