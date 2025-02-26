# FeeProperties

Defines the specific parameters used for fee calculation.

## Example Usage

```typescript
import { FeeProperties } from "@moovio/sdk/models/components";

let value: FeeProperties = {
  fixedAmount: {
    currency: "USD",
    valueDecimal: "0.0195",
  },
  variableRate: "0.15",
  minPerTransaction: {
    currency: "USD",
    valueDecimal: "0.0195",
  },
  maxPerTransaction: {
    currency: "USD",
    valueDecimal: "0.035",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fixedAmount`                                                                                                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                   | :heavy_minus_sign:                                                                                                                                     | A fixed fee that is applied to the amount of each transaction in the `fixed` and `blended` fee models.                                                 |                                                                                                                                                        |
| `variableRate`                                                                                                                                         | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | A percentage fee that is applied to the amount of each transaction in the `blended` fee model, expressed as a decimal. <br/><br/>For example, 0.05% is '0.05'. | 0.05                                                                                                                                                   |
| `minPerTransaction`                                                                                                                                    | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                   | :heavy_minus_sign:                                                                                                                                     | Specifies the minimum allowable spending for a single transaction, working as a transaction floor.                                                     |                                                                                                                                                        |
| `maxPerTransaction`                                                                                                                                    | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                   | :heavy_minus_sign:                                                                                                                                     | Specifies the maximum allowable spending for a single transaction, working as a transaction ceiling.                                                   |                                                                                                                                                        |