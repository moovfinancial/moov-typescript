# PartnerPricing

## Example Usage

```typescript
import { PartnerPricing } from "@moovio/sdk/models/components";

let value: PartnerPricing = {
  planID: "00f753cb-0c1f-4570-bd48-e2d8ed710d7a",
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
  createdAt: new Date("2025-09-08T18:09:01.569Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `planID`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the fee plan.                                                                     | Fixed Rate Merchant Plan                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A description of the fee plan.                                                                |                                                                                               |
| `revenueShare`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The integer percentage value of the revenue split for partner.                                | 10                                                                                            |
| `cardAcquiringModel`                                                                          | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                | :heavy_check_mark:                                                                            | Specifies the card processing pricing model                                                   |                                                                                               |
| `billableFees`                                                                                | [components.BillableFee](../../models/components/billablefee.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |