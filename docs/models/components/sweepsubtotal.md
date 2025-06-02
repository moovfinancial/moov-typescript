# SweepSubtotal

## Example Usage

```typescript
import { SweepSubtotal } from "@moovio/sdk/models/components";

let value: SweepSubtotal = {
  type: "refund-failure",
  count: 486428,
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [components.WalletTransactionType](../../models/components/wallettransactiontype.md) | :heavy_check_mark:                                                                   | The type of wallet transaction the subtotal is for.                                  |
| `count`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The number of transactions of this type accrued in the sweep.                        |
| `amount`                                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md)                 | :heavy_check_mark:                                                                   | The value of transactions of this type accrued in the sweep.                         |