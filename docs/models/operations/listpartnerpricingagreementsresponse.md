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
      aggreementID: "0e2d5c54-147d-47f8-a06b-3b80c8174e4f",
      planID: "5db6acdd-2d03-4919-8465-18f94f6bafe2",
      acceptedOn: new Date("2025-06-06T08:49:54.446Z"),
      status: "terminated",
      cardAcquringModel: "cost-plus",
      billableFees: [
        {
          billableEvent: "ach-volume",
          feeName: "ACH Direct Debit",
          feeModel: "blended",
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