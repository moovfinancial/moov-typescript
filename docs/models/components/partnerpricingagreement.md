# PartnerPricingAgreement

## Example Usage

```typescript
import { PartnerPricingAgreement } from "@moovio/sdk/models/components";

let value: PartnerPricingAgreement = {
  agreementID: "9d4b2654-3bb9-4277-826d-8fac307e227a",
  planID: "6e79fb49-f08c-46a9-b743-754b54bc9b35",
  name: "<value>",
  acceptedOn: new Date("2024-11-14T03:55:35.742Z"),
  status: "terminated",
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
  revenueShare: "2.25",
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agreementID`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `planID`                                                                                                                                            | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `accountID`                                                                                                                                         | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `name`                                                                                                                                              | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The name of the agreement.                                                                                                                          |                                                                                                                                                     |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | The description of the agreement.                                                                                                                   |                                                                                                                                                     |
| `acceptedOn`                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                       | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `status`                                                                                                                                            | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)                                                              | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `cardAcquiringModel`                                                                                                                                | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Specifies the card processing pricing model                                                                                                         |                                                                                                                                                     |
| `billableFees`                                                                                                                                      | [components.BillableFee](../../models/components/billablefee.md)[]                                                                                  | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |                                                                                                                                                     |
| `minimumCommitment`                                                                                                                                 | [components.MinimumCommitment](../../models/components/minimumcommitment.md)                                                                        | :heavy_check_mark:                                                                                                                                  | The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference. |                                                                                                                                                     |
| `monthlyPlatformFee`                                                                                                                                | [components.MonthlyPlatformFee](../../models/components/monthlyplatformfee.md)                                                                      | :heavy_check_mark:                                                                                                                                  | Fixed recurring amount paid in the billing period regardless of usage.                                                                              |                                                                                                                                                     |
| `revenueShare`                                                                                                                                      | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  |   The decimal-formatted numerical string of the revenue split for partner.<br/>  <br/>  For example, 2.25% is '2.25'.                               | 2.25                                                                                                                                                |