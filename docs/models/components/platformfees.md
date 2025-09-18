# PlatformFees

A detailed breakdown of platform fees.

## Example Usage

```typescript
import { PlatformFees } from "@moovio/sdk/models/components";

let value: PlatformFees = {
  walletFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  merchantPCIFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  total: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `walletFee`                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Fees associated with wallet services.                                |
| `merchantPCIFee`                                                     | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Fees for PCI compliance.                                             |
| `total`                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Total platform fees.                                                 |