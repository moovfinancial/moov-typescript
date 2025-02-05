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
      aggreementID: "d87fc85d-717d-4709-8fd9-ed79bd0c7ac8",
      planID: "61bfc694-84b4-4fa1-b0f3-53ea885963a5",
      acceptedOn: new Date("2024-03-31T06:32:56.264Z"),
      status: "terminated",
      cardAcquringModel: "flat-rate",
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
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.FeePlanAgreement](../../models/components/feeplanagreement.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |