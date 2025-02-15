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
    aggreementID: "6fc50a31-ef44-427d-bbd3-be4b64f5167c",
    planID: "de7b415b-4dc3-45d3-a55c-0196a4ec1cff",
    acceptedOn: new Date("2023-05-16T11:00:36.329Z"),
    status: "terminated",
    cardAcquringModel: "cost-plus",
    billableFees: [
      {
        billableEvent: "ach-volume",
        feeName: "ACH Direct Debit",
        feeModel: "blended",
        feeCategory: "card-other",
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