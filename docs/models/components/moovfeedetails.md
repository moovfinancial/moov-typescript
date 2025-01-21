# MoovFeeDetails

Processing and pass-through costs that add up to the moovFee.

## Example Usage

```typescript
import { MoovFeeDetails } from "moov-sdk/models/components";

let value: MoovFeeDetails = {
  moovProcessing: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `cardScheme`                                                                                                                       | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Card scheme fees accrued during authorization and settlement. String type represents dollars with up to 9 decimal place precision. |
| `interchange`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Network interchange fee for Visa, Mastercard, or Discover. String type represents dollars with up to 9 decimal place precision.    |
| `discount`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Network discount fee for American Express. String type represents dollars with up to 9 decimal place precision.                    |
| `moovProcessing`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Moov processing fee. String type represents dollars with up to 9 decimal place precision.                                          |