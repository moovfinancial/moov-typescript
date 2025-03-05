# Adjustment

An adjustment to a wallet.

## Example Usage

```typescript
import { Adjustment } from "@moovio/sdk/models/components";

let value: Adjustment = {
  adjustmentID: "8eee6252-d93d-4702-b61a-390251f3eafe",
  walletID: "9f27c7fb-3ce8-4f8c-953c-345955770573",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  createdOn: new Date("2024-09-15T22:34:07.605Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `walletID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |