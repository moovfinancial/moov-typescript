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
    agreementID: "68b80752-76bf-4039-bf85-442a8b070ebe",
    planID: "b10e3900-40b6-41da-977b-10915abe9439",
    name: "<value>",
    acceptedOn: new Date("2023-01-18T06:11:11.096Z"),
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.FeePlanAgreement](../../models/components/feeplanagreement.md) | :heavy_check_mark:                                                         | N/A                                                                        |