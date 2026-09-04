# FacilitatorFee

Total or markup fee.

## Example Usage

```typescript
import { FacilitatorFee } from "@moovio/sdk/models/components";

let value: FacilitatorFee = {
  total: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  markup: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `total`                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | Total facilitator fee.                                               |
| `markup`                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | Markup facilitator fee.                                              |