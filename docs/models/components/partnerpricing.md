# PartnerPricing

## Example Usage

```typescript
import { PartnerPricing } from "@moovio/sdk/models/components";

let value: PartnerPricing = {
  planID: "bc007d32-ee4d-4cf2-8e0a-ae328f4c54ac",
  name: "Fixed Rate Merchant Plan",
  revenueShare: 10,
  cardAcquringModel: "flat-rate",
  billableFees: [
    {
      billableEvent: "ach-volume",
      feeName: "ACH Direct Debit",
      feeModel: "blended",
      feeCategory: "ach",
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
  createdAt: new Date("2025-05-10T16:59:51.268Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `planID`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the fee plan.                                                                     | Fixed Rate Merchant Plan                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A description of the fee plan.                                                                |                                                                                               |
| `revenueShare`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The integer percentage value of the revenue split for partner.                                | 10                                                                                            |
| `cardAcquringModel`                                                                           | [components.CardAcquringModel](../../models/components/cardacquringmodel.md)                  | :heavy_check_mark:                                                                            | Specifies the card processing pricing model                                                   |                                                                                               |
| `billableFees`                                                                                | [components.BillableFee](../../models/components/billablefee.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |