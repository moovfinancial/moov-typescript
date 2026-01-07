# PartnerPricing

## Example Usage

```typescript
import { PartnerPricing } from "@moovio/sdk/models/components";

let value: PartnerPricing = {
  planID: "af1cc0ab-cc63-419e-bb66-53d9eeb53d7f",
  name: "Fixed Rate Partner Plan",
  revenueShare: "2.25",
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
  createdAt: new Date("2025-04-09T19:32:42.037Z"),
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planID`                                                                                                                                            | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `name`                                                                                                                                              | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The name of the partner pricing plan.                                                                                                               | Fixed Rate Partner Plan                                                                                                                             |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | A description of the fee plan.                                                                                                                      |                                                                                                                                                     |
| `revenueShare`                                                                                                                                      | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  |   The decimal-formatted numerical string of the revenue split for partner.<br/>  <br/>  For example, 2.25% is '2.25'.                               | 2.25                                                                                                                                                |
| `cardAcquiringModel`                                                                                                                                | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Specifies the card processing pricing model                                                                                                         |                                                                                                                                                     |
| `billableFees`                                                                                                                                      | [components.BillableFee](../../models/components/billablefee.md)[]                                                                                  | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `minimumCommitment`                                                                                                                                 | [components.MinimumCommitment](../../models/components/minimumcommitment.md)                                                                        | :heavy_check_mark:                                                                                                                                  | The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference. |                                                                                                                                                     |
| `monthlyPlatformFee`                                                                                                                                | [components.MonthlyPlatformFee](../../models/components/monthlyplatformfee.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Fixed recurring amount paid in the billing period regardless of usage.                                                                              |                                                                                                                                                     |
| `createdAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                       | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |