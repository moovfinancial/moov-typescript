# PartnerPricingAgreement

## Example Usage

```typescript
import { PartnerPricingAgreement } from "@moovio/sdk/models/components";

let value: PartnerPricingAgreement = {
  aggreementID: "586772c4-84dd-4f5e-ad92-bfd107ebfaec",
  planID: "12d594ee-fe99-4f5a-b75e-97028f7ade52",
  acceptedOn: new Date("2024-08-01T03:05:20.153Z"),
  status: "terminated",
  cardAcquringModel: "cost-plus",
  billableFees: [
    {
      billableEvent: "ach-volume",
      feeName: "ACH Direct Debit",
      feeModel: "fixed",
      feeCategory: "other",
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