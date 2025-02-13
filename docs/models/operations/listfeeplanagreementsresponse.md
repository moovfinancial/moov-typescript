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
      aggreementID: "12ab9f72-a998-4f21-9239-93777c7c28d2",
      planID: "92c1f751-6a14-4da3-82e4-2f4176e211e7",
      acceptedOn: new Date("2024-10-12T20:06:24.868Z"),
      status: "terminated",
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