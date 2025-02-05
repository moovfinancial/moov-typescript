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
      planID: "06caf1e5-7613-4b02-90d9-2cfee0949527",
      name: "Fixed Rate Merchant Plan",
      revenueShare: 10,
      cardAcquringModel: "flat-rate",
      billableFees: [
        {
          billableEvent: "ach-volume",
          feeName: "ACH Direct Debit",
          feeModel: "fixed",
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
      createdAt: new Date("2025-07-22T16:12:56.525Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.PartnerPricing](../../models/components/partnerpricing.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |