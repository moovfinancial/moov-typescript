# BillingInterchangeProgramFee

Details of a specific interchange program fee.

## Example Usage

```typescript
import { BillingInterchangeProgramFee } from "@moovio/sdk/models/components";
import { Decimal } from "@moovio/sdk/types";

let value: BillingInterchangeProgramFee = {
  programName: "<value>",
  count: 729667,
  percentageRate: new Decimal("3780.81"),
  perItemRate: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  total: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  transferVolume: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `programName`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The name of the interchange program.                                 |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | The number of transactions for this program.                         |
| `percentageRate`                                                     | *Decimal*                                                            | :heavy_check_mark:                                                   | The percentage rate for this program.                                |
| `perItemRate`                                                        | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | The per-item rate for this program.                                  |
| `total`                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | The total fee amount for this program.                               |
| `transferVolume`                                                     | [components.AmountDecimal](../../models/components/amountdecimal.md) | :heavy_check_mark:                                                   | The total transfer volume for this program.                          |