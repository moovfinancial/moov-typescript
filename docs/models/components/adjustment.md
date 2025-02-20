# Adjustment

An adjustment to a wallet.

## Example Usage

```typescript
import { Adjustment } from "@moovio/sdk/models/components";

let value: Adjustment = {
  adjustmentID: "285428d7-5e27-4cee-8183-2d5136a9e564",
  walletID: "f179b486-1160-400c-8ee0-a41118422d07",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  createdOn: new Date("2023-06-09T23:08:32.328Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `walletID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |