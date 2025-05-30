# PartnerPricing

## Example Usage

```typescript
import { PartnerPricing } from "@moovio/sdk/models/components";

let value: PartnerPricing = {
  planID: "af1cc0ab-cc63-419e-bb66-53d9eeb53d7f",
  name: "Fixed Rate Merchant Plan",
  revenueShare: 10,
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
  createdAt: new Date("2024-04-09T19:32:42.037Z"),
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planID`                                                                                                                                            | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `name`                                                                                                                                              | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The name of the fee plan.                                                                                                                           | Fixed Rate Merchant Plan                                                                                                                            |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | A description of the fee plan.                                                                                                                      |                                                                                                                                                     |
| `revenueShare`                                                                                                                                      | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The integer percentage value of the revenue split for partner.                                                                                      | 10                                                                                                                                                  |
| `cardAcquiringModel`                                                                                                                                | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Specifies the card processing pricing model                                                                                                         |                                                                                                                                                     |
| `billableFees`                                                                                                                                      | [components.BillableFee](../../models/components/billablefee.md)[]                                                                                  | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `minimumCommitment`                                                                                                                                 | [components.MinimumCommitment](../../models/components/minimumcommitment.md)                                                                        | :heavy_check_mark:                                                                                                                                  | The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference. |                                                                                                                                                     |
| `monthlyPlatformFee`                                                                                                                                | [components.MonthlyPlatformFee](../../models/components/monthlyplatformfee.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Fixed recurring amount paid in the billing period regardless of usage.                                                                              |                                                                                                                                                     |
| `createdAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                       | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |