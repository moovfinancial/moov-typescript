# AmountDecimalRange

## Example Usage

```typescript
import { AmountDecimalRange } from "@moovio/sdk/models/components";

let value: AmountDecimalRange = {
  minimum: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  maximum: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `minimum`                                                            | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Minimum amount allowed in the range                                  |
| `maximum`                                                            | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Maximum amount allowed in the range                                  |