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
    aggreementID: "0a31ef44-27db-4d3b-ae4b-64f5167cfde7",
    planID: "415b4dc3-5d35-45c0-b196-a4ec1cffb194",
    acceptedOn: new Date("2025-02-25T08:44:40.272Z"),
    status: "terminated",
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
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.FeePlanAgreement](../../models/components/feeplanagreement.md) | :heavy_check_mark:                                                         | N/A                                                                        |