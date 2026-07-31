# CreateTransferFacilitatorFee

Total or markup fee to apply when creating a transfer.

## Example Usage

```typescript
import { CreateTransferFacilitatorFee } from "@moovio/sdk/models/components";

let value: CreateTransferFacilitatorFee = {
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
| `total`                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | Total facilitator fee. Only either `total` or `markup` can be set.   |
| `markup`                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | Markup facilitator fee. Only either `total` or `markup` can be set.  |