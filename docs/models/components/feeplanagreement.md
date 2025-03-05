# FeePlanAgreement

## Example Usage

```typescript
import { FeePlanAgreement } from "@moovio/sdk/models/components";

let value: FeePlanAgreement = {
  agreementID: "e382fd5c-9323-4afc-ae3e-1f2555bd984e",
  planID: "6811e348-7856-4276-af29-f1bd59153a07",
  name: "<value>",
  acceptedOn: new Date("2025-10-17T15:43:18.403Z"),
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