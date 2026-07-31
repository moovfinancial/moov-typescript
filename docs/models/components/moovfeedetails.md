# MoovFeeDetails

Processing and pass-through costs that add up to the moovFee.

## Example Usage

```typescript
import { MoovFeeDetails } from "@moovio/sdk/models/components";

let value: MoovFeeDetails = {
  cardScheme: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  interchange: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  discount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  moovProcessing: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `cardScheme`                                                                                                                       | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                               | :heavy_minus_sign:                                                                                                                 | Card scheme fees accrued during authorization and settlement. String type represents dollars with up to 9 decimal place precision. |
| `interchange`                                                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                               | :heavy_minus_sign:                                                                                                                 | Network interchange fee for Visa, Mastercard, or Discover. String type represents dollars with up to 9 decimal place precision.    |
| `discount`                                                                                                                         | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                               | :heavy_minus_sign:                                                                                                                 | Network discount fee for American Express. String type represents dollars with up to 9 decimal place precision.                    |
| `moovProcessing`                                                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                               | :heavy_check_mark:                                                                                                                 | Moov processing fee. String type represents dollars with up to 9 decimal place precision.                                          |