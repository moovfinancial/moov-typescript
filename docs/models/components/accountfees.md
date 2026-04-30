# AccountFees

A detailed breakdown of account fees.

## Example Usage

```typescript
import { AccountFees } from "@moovio/sdk/models/components";

let value: AccountFees = {
  walletFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  merchantPCIFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  invoicePaymentFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  kybFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  kycFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  transactionMonitoringFee: {
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
| `invoicePaymentFee`                                                  | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Fees for invoice payments.                                           |
| `kybFee`                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | Fees for business verification.                                      |
| `kycFee`                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | Fees for customer verification.                                      |
| `transactionMonitoringFee`                                           | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_minus_sign:                                                   | Fees for transaction risk monitoring.                                |
| `total`                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | Total platform fees.                                                 |