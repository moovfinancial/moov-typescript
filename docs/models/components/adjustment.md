# Adjustment

An adjustment to a wallet.

## Example Usage

```typescript
import { Adjustment } from "@moovio/sdk/models/components";

let value: Adjustment = {
  adjustmentID: "40053a2e-f702-44ee-af42-856705b7cafb",
  walletID: "2efd115b-d2a2-417d-8aa6-4e6811ceaec2",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  createdOn: new Date("2025-10-29T12:43:00.931Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `walletID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |