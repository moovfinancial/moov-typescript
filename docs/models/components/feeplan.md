# FeePlan

## Example Usage

```typescript
import { FeePlan } from "@moovio/sdk/models/components";

let value: FeePlan = {
  planID: "6d0c8d36-bd7d-48fe-a6fc-8fb314b86c0d",
  name: "Fixed Rate Merchant Plan",
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
  createdAt: new Date("2024-03-02T08:51:53.258Z"),
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planID`                                                                                                                                            | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `name`                                                                                                                                              | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The name of the fee plan.                                                                                                                           | Fixed Rate Merchant Plan                                                                                                                            |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | A description of the fee plan.                                                                                                                      |                                                                                                                                                     |
| `cardAcquiringModel`                                                                                                                                | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Specifies the card processing pricing model                                                                                                         |                                                                                                                                                     |
| `billableFees`                                                                                                                                      | [components.BillableFee](../../models/components/billablefee.md)[]                                                                                  | :heavy_check_mark:                                                                                                                                  | Additional usage-based fees for this plan.                                                                                                          |                                                                                                                                                     |
| `minimumCommitment`                                                                                                                                 | [components.MinimumCommitment](../../models/components/minimumcommitment.md)                                                                        | :heavy_check_mark:                                                                                                                                  | The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference. |                                                                                                                                                     |
| `createdAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                       | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |