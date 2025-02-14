# PartnerPricingAgreement

## Example Usage

```typescript
import { PartnerPricingAgreement } from "@moovio/sdk/models/components";

let value: PartnerPricingAgreement = {
  aggreementID: "e328f4c5-4ac0-4986-bc58-6772c484ddf5",
  planID: "d92bfd10-7ebf-4aec-a812-d594eefe99f5",
  acceptedOn: new Date("2024-04-26T22:20:58.886Z"),
  status: "active",
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
  revenueShare: 10,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `aggreementID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `planID`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `acceptedOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `cardAcquringModel`                                                                           | [components.CardAcquringModel](../../models/components/cardacquringmodel.md)                  | :heavy_check_mark:                                                                            | Specifies the card processing pricing model                                                   |                                                                                               |
| `billableFees`                                                                                | [components.BillableFee](../../models/components/billablefee.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `revenueShare`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The integer percentage value of the revenue split for partner.                                | 10                                                                                            |