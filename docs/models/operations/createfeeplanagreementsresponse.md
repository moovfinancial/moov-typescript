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
    agreementID: "5b6fc50a-31ef-4442-97db-d3be4b64f516",
    planID: "cfde7b41-5b4d-4c35-bd35-5c0196a4ec1c",
    name: "<value>",
    acceptedOn: new Date("2025-10-29T21:49:35.631Z"),
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