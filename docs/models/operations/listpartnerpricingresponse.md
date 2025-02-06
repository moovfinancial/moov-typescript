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
      planID: "f04dadac-73c9-42cf-b541-af2710ad5e13",
      name: "Fixed Rate Merchant Plan",
      revenueShare: 10,
      cardAcquringModel: "flat-rate",
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
      createdAt: new Date("2023-05-21T17:10:05.507Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.PartnerPricing](../../models/components/partnerpricing.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |