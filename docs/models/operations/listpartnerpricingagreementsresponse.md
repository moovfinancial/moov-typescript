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
      aggreementID: "5db6acdd-2d03-4919-8465-18f94f6bafe2",
      planID: "ce7b1329-304a-495d-9448-772846bec69b",
      acceptedOn: new Date("2024-01-30T19:58:03.250Z"),
      status: "active",
      cardAcquringModel: "flat-rate",
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