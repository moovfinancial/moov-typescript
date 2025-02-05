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
    aggreementID: "516a14da-32e4-42f4-8176-e211e7298395",
    planID: "843e2464-3c51-4825-ae5a-82ad1cbd14b0",
    acceptedOn: new Date("2025-07-29T08:16:06.752Z"),
    status: "active",
    cardAcquringModel: "cost-plus",
    billableFees: [
      {
        billableEvent: "ach-volume",
        feeName: "ACH Direct Debit",
        feeModel: "fixed",
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
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.FeePlanAgreement](../../models/components/feeplanagreement.md) | :heavy_check_mark:                                                         | N/A                                                                        |