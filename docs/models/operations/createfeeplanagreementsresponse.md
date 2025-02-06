# CreateFeePlanAgreementsResponse

## Example Usage

```typescript
import { CreateFeePlanAgreementsResponse } from "@moovio/sdk/models/operations";

let value: CreateFeePlanAgreementsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    aggreementID: "843e2464-3c51-4825-ae5a-82ad1cbd14b0",
    planID: "d76402fd-4f54-42ef-b5b5-1681d739c5b6",
    acceptedOn: new Date("2025-04-24T22:48:28.937Z"),
    status: "active",
    cardAcquringModel: "cost-plus",
    billableFees: [
      {
        billableEvent: "ach-volume",
        feeName: "ACH Direct Debit",
        feeModel: "blended",
        feeCategory: "card-push",
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
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.FeePlanAgreement](../../models/components/feeplanagreement.md) | :heavy_check_mark:                                                         | N/A                                                                        |