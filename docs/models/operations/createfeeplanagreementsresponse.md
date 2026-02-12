# CreateFeePlanAgreementsResponse

## Example Usage

```typescript
import { CreateFeePlanAgreementsResponse } from "@moovio/sdk/models/operations";

let value: CreateFeePlanAgreementsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    agreementID: "<id>",
    planID: "<id>",
    name: "<value>",
    acceptedOn: new Date("2026-03-02T13:31:32.859Z"),
    status: "terminated",
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
          volumeRanges: [
            {
              fromValue: 1,
              toValue: 2,
              flatAmount: {
                currency: "USD",
                valueDecimal: "1.23",
              },
              perUnitAmount: {
                currency: "USD",
                valueDecimal: "1.23",
              },
            },
          ],
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.FeePlanAgreement](../../models/components/feeplanagreement.md) | :heavy_check_mark:                                                         | N/A                                                                        |