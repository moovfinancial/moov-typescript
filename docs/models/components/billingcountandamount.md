# BillingCountAndAmount

## Example Usage

```typescript
import { BillingCountAndAmount } from "@moovio/sdk/models/components";

let value: BillingCountAndAmount = {
  count: 882145,
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | The number of items.                                                 |
| `amount`                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | The total amount.                                                    |