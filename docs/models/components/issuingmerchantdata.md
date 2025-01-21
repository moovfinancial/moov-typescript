# IssuingMerchantData

## Example Usage

```typescript
import { IssuingMerchantData } from "moov-sdk/models/components";

let value: IssuingMerchantData = {
  name: "Whole Body Fitness",
  city: "San Francisco",
  country: "US",
  postalCode: "94107",
  state: "CA",
  mcc: "7298",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `networkID`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | External identifier used to identify the merchant with the card brand. |                                                                        |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Name of the merchant.                                                  | Whole Body Fitness                                                     |
| `city`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The merchant's location.                                               | San Francisco                                                          |
| `country`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Two-letter country code.                                               | US                                                                     |
| `postalCode`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | The merchant's five-digit postal code.                                 | 94107                                                                  |
| `state`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | The merchant's two-letter state abbreviation.                          | CA                                                                     |
| `mcc`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | The Merchant Category Code.                                            | 7298                                                                   |