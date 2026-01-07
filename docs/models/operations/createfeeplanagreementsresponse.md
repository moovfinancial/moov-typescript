# CreateFeePlanAgreementsResponse

## Example Usage

```typescript
import { CreateFeePlanAgreementsResponse } from "@moovio/sdk/models/operations";

let value: CreateFeePlanAgreementsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    agreementID: "b8075276-bf03-49f8-8544-2a8b070ebeeb",
    planID: "0e390040-b61d-4a77-bb10-915abe943940",
    name: "<value>",
    acceptedOn: new Date("2026-08-26T10:13:58.068Z"),
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