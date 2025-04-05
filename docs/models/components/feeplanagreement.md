# FeePlanAgreement

## Example Usage

```typescript
import { FeePlanAgreement } from "@moovio/sdk/models/components";

let value: FeePlanAgreement = {
  agreementID: "b179e69c-f5df-4d15-acb3-562be5787687",
  planID: "012310e3-c56e-4aad-b6ca-169e720799cc",
  name: "<value>",
  acceptedOn: new Date("2025-04-24T07:30:19.951Z"),
  status: "active",
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
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agreementID`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `planID`                                                                                                                                            | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `accountID`                                                                                                                                         | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | N/A                                                                                                                                                 |
| `name`                                                                                                                                              | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The name of the agreement.                                                                                                                          |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | The description of the agreement.                                                                                                                   |
| `acceptedOn`                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                       | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `status`                                                                                                                                            | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)                                                              | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `cardAcquiringModel`                                                                                                                                | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Specifies the card processing pricing model                                                                                                         |
| `billableFees`                                                                                                                                      | [components.BillableFee](../../models/components/billablefee.md)[]                                                                                  | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `minimumCommitment`                                                                                                                                 | [components.MinimumCommitment](../../models/components/minimumcommitment.md)                                                                        | :heavy_check_mark:                                                                                                                                  | The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference. |
| `monthlyPlatformFee`                                                                                                                                | [components.MonthlyPlatformFee](../../models/components/monthlyplatformfee.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Fixed recurring amount paid in the billing period regardless of usage.                                                                              |