# FeePlan

## Example Usage

```typescript
import { FeePlan } from "@moovio/sdk/models/components";

let value: FeePlan = {
  planID: "56276f29-f1bd-4591-b53a-078ee0968a4c",
  name: "Fixed Rate Merchant Plan",
  cardAcquringModel: "flat-rate",
  billableFees: [
    {
      billableEvent: "ach-volume",
      feeName: "ACH Direct Debit",
      feeModel: "blended",
      feeCategory: "rtp",
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
  createdAt: new Date("2024-06-15T18:30:15.527Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `planID`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the fee plan.                                                                     | Fixed Rate Merchant Plan                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A description of the fee plan.                                                                |                                                                                               |
| `cardAcquringModel`                                                                           | [components.CardAcquringModel](../../models/components/cardacquringmodel.md)                  | :heavy_check_mark:                                                                            | Specifies the card processing pricing model                                                   |                                                                                               |
| `billableFees`                                                                                | [components.BillableFee](../../models/components/billablefee.md)[]                            | :heavy_check_mark:                                                                            | Additional usage-based fees for this plan.                                                    |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |