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
      planID: "37f924af-b4fe-4f87-81b2-54f0afcc4c8d",
      name: "Fixed Rate Merchant Plan",
      revenueShare: 10,
      cardAcquiringModel: "flat-rate",
      billableFees: [
        {
          billableFeeID: "9d957d33-1a9a-47aa-9460-fe1a90f003dd",
          billableEvent: "card-auth-volume",
          feeName: "Card decline fee",
          feeModel: "fixed",
          feeCategory: "card-acquiring",
          feeProperties: {
            fixedAmount: {
              currency: "USD",
              valueDecimal: "0.1",
            },
          },
          feeConditions: {
            "transactionType": [
              "decline",
            ],
          },
        },
      ],
      minimumCommitment: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      monthlyPlatformFee: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      createdAt: new Date("2024-06-23T03:35:38.861Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.PartnerPricing](../../models/components/partnerpricing.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |