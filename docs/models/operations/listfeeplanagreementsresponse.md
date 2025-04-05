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
      agreementID: "20660b04-6ffc-42b1-95ec-ecefac959970",
      planID: "71e2054f-64ac-40a1-b829-386acb1aeda7",
      name: "<value>",
      acceptedOn: new Date("2023-08-01T12:44:59.777Z"),
      status: "terminated",
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
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.FeePlanAgreement](../../models/components/feeplanagreement.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |