# ListPartnerPricingAgreementsResponse

## Example Usage

```typescript
import { ListPartnerPricingAgreementsResponse } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingAgreementsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      aggreementID: "652bd5c9-c6b6-4187-b4e6-066dc3d3510a",
      planID: "7dcafc4c-b613-4c3f-9b79-9f24b3d5209d",
      acceptedOn: new Date("2025-10-02T14:57:31.128Z"),
      status: "terminated",
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
      revenueShare: 10,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.PartnerPricingAgreement](../../models/components/partnerpricingagreement.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |