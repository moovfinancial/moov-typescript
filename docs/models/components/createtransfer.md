# CreateTransfer

## Example Usage

```typescript
import { CreateTransfer } from "@moovio/sdk/models/components";

let value: CreateTransfer = {
  source: {
    paymentMethodID: "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
  },
  destination: {
    paymentMethodID: "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
  },
  amount: {
    currency: "USD",
    value: 32945,
  },
  description: "Transfer from card to wallet",
  metadata: {
    "optional": "metadata",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                         | [components.CreateTransferSource](../../models/components/createtransfersource.md)                                               | :heavy_check_mark:                                                                                                               | Where funds for a transfer originate. For the source, you must include either a `paymentMethodID` or a `transferID`.             |                                                                                                                                  |
| `destination`                                                                                                                    | [components.CreateTransferDestination](../../models/components/createtransferdestination.md)                                     | :heavy_check_mark:                                                                                                               | The final stage of a transfer and the ultimate recipient of the funds.                                                           |                                                                                                                                  |
| `amount`                                                                                                                         | [components.Amount](../../models/components/amount.md)                                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `facilitatorFee`                                                                                                                 | [components.FacilitatorFee](../../models/components/facilitatorfee.md)                                                           | :heavy_minus_sign:                                                                                                               | Total or markup fee.                                                                                                             |                                                                                                                                  |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | An optional description of the transfer that is used on receipts and for your own internal use.                                  | Pay Instructor for May 15 Class                                                                                                  |
| `metadata`                                                                                                                       | Record<string, *string*>                                                                                                         | :heavy_minus_sign:                                                                                                               | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                                    | {<br/>"optional": "metadata"<br/>}                                                                                               |
| `salesTaxAmount`                                                                                                                 | [components.Amount](../../models/components/amount.md)                                                                           | :heavy_minus_sign:                                                                                                               | Optional sales tax amount. `transfer.amount.value` should be inclusive of any sales tax and represents the total amount charged. |                                                                                                                                  |