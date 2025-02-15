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
      aggreementID: "c12ab9f7-2a99-48f2-8123-993777c7c28d",
      planID: "792c1f75-16a1-44da-932e-42f4176e211e",
      acceptedOn: new Date("2023-06-15T01:33:14.819Z"),
      status: "terminated",
      cardAcquringModel: "flat-rate",
      billableFees: [
        {
          billableEvent: "ach-volume",
          feeName: "ACH Direct Debit",
          feeModel: "fixed",
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
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.FeePlanAgreement](../../models/components/feeplanagreement.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |