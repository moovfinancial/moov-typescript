# PartnerPricing

## Example Usage

```typescript
import { PartnerPricing } from "moov-sdk/models/components";

let value: PartnerPricing = {
  planID: "baf1d086-8530-48d5-9311-31411d28c723",
  name: "Fixed Rate Merchant Plan",
  revenueShare: 10,
  cardAcquringModel: "flat-rate",
  billableFees: [
    {
      billableEvent: "ach-volume",
      feeName: "ACH Direct Debit",
      feeModel: "fixed",
      feeCategory: "network-passthrough",
      feeProperties: {
        fixedAmount: "0.15",
        variableRate: "0.14",
        minPerTransaction: "1.75",
        maxPerTransaction: "3.50",
      },
      feeConditions: {
        "cardBrand": [
          "visa",
        ],
      },
    },
  ],
  createdAt: new Date("2025-04-03T02:52:24.426Z"),
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