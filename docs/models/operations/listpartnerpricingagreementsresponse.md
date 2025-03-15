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
      agreementID: "b3d5209d-4ec0-4993-b570-226bd2caef11",
      planID: "23ef5dd9-9949-4326-ab9f-a22139de68c4",
      name: "<value>",
      acceptedOn: new Date("2023-07-10T19:03:58.934Z"),
      status: "active",
      cardAcquiringModel: "cost-plus",
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