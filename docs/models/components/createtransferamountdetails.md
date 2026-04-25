# CreateTransferAmountDetails

## Example Usage

```typescript
import { CreateTransferAmountDetails } from "@moovio/sdk/models/components";

let value: CreateTransferAmountDetails = {
  tip: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `tip`                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | The amount of tip applied to the transfer.                           |