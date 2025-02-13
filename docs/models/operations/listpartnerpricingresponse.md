# ListPartnerPricingResponse

## Example Usage

```typescript
import { ListPartnerPricingResponse } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      planID: "4e4f85db-6acd-4d2d-a039-1946518f94f6",
      name: "Fixed Rate Merchant Plan",
      revenueShare: 10,
      cardAcquringModel: "flat-rate",
      billableFees: [
        {
          billableEvent: "ach-volume",
          feeName: "ACH Direct Debit",
          feeModel: "blended",
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
      createdAt: new Date("2023-06-12T05:05:55.313Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.PartnerPricing](../../models/components/partnerpricing.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |