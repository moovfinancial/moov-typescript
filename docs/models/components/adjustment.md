# Adjustment

An adjustment to a wallet.

## Example Usage

```typescript
import { Adjustment } from "@moovio/sdk/models/components";

let value: Adjustment = {
  adjustmentID: "53c34595-5770-4573-b79d-c4206d248980",
  walletID: "e42cbce0-8c88-490e-830a-82f641822b1b",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  createdOn: new Date("2024-03-08T04:01:27.021Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `walletID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |