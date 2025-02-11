# Adjustment

An adjustment to a wallet.

## Example Usage

```typescript
import { Adjustment } from "@moovio/sdk/models/components";

let value: Adjustment = {
  adjustmentID: "aec21f2a-387b-4df3-9660-38e5bf21f04d",
  walletID: "2cb18e63-b3e6-47b5-9f4f-6cc9c992e285",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  createdOn: new Date("2023-07-05T22:00:57.114Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `walletID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |