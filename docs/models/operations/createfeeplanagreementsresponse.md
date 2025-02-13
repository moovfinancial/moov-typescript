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
    aggreementID: "fc50a31e-f442-47db-bd3b-e4b64f5167cf",
    planID: "e7b415b4-dc35-4d35-85c0-196a4ec1cffb",
    acceptedOn: new Date("2024-09-23T09:07:23.695Z"),
    status: "active",
    cardAcquringModel: "flat-rate",
    billableFees: [
      {
        billableEvent: "ach-volume",
        feeName: "ACH Direct Debit",
        feeModel: "blended",
        feeCategory: "rtp",
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