# MoovFee

Moov fee charged to an account involved in a transfer.

## Example Usage

```typescript
import { MoovFee } from "@moovio/sdk/models/components";

let value: MoovFee = {
  accountID: "<id>",
  transferParty: "source",
  totalAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  feeIDs: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountID`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the account that fees were charged to.                                                   |
| `transferParty`                                                                                | [components.TransferParty](../../models/components/transferparty.md)                           | :heavy_check_mark:                                                                             | Indicates whether the account charged was the partner, source, or destination of the transfer. |
| `totalAmount`                                                                                  | [components.AmountDecimal](../../models/components/amountdecimal.md)                           | :heavy_check_mark:                                                                             | The total amount of fees charged to the account.                                               |
| `feeIDs`                                                                                       | *string*[]                                                                                     | :heavy_check_mark:                                                                             | List of fee IDs that sum to the totalAmount.                                                   |