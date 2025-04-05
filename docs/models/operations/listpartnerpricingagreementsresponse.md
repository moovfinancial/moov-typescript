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
      agreementID: "9354f5bb-2c39-463d-837e-58983a9c123c",
      planID: "f7e4ee63-f5e2-4413-9b58-52c99bbf1e67",
      name: "<value>",
      acceptedOn: new Date("2024-11-04T10:09:46.736Z"),
      status: "active",
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