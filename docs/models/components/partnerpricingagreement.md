# PartnerPricingAgreement

## Example Usage

```typescript
import { PartnerPricingAgreement } from "@moovio/sdk/models/components";

let value: PartnerPricingAgreement = {
  agreementID: "d5c9323a-fce3-4e1f-b255-5bd984e96811",
  planID: "34878562-76f2-49f1-9bd5-9153a078ee09",
  name: "<value>",
  acceptedOn: new Date("2024-08-10T17:40:51.908Z"),
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
  revenueShare: 10,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `agreementID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `planID`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the agreement.                                                                    |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the agreement.                                                             |                                                                                               |
| `acceptedOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `cardAcquiringModel`                                                                          | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                | :heavy_check_mark:                                                                            | Specifies the card processing pricing model                                                   |                                                                                               |
| `billableFees`                                                                                | [components.BillableFee](../../models/components/billablefee.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `revenueShare`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The integer percentage value of the revenue split for partner.                                | 10                                                                                            |