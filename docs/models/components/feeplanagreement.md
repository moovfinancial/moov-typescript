# FeePlanAgreement

## Example Usage

```typescript
import { FeePlanAgreement } from "@moovio/sdk/models/components";

let value: FeePlanAgreement = {
  agreementID: "721cb4af-d420-487c-8c1f-4590b3e363a6",
  planID: "db74d673-d8a6-4040-90f1-7d636d0730c0",
  name: "<value>",
  acceptedOn: new Date("2024-08-20T20:54:18.212Z"),
  status: "active",
  cardAcquiringModel: "flat-rate",
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `agreementID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `planID`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the agreement.                                                                    |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the agreement.                                                             |
| `acceptedOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cardAcquiringModel`                                                                          | [components.CardAcquiringModel](../../models/components/cardacquiringmodel.md)                | :heavy_check_mark:                                                                            | Specifies the card processing pricing model                                                   |
| `billableFees`                                                                                | [components.BillableFee](../../models/components/billablefee.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |