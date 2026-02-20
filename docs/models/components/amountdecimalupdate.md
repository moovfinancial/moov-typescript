# AmountDecimalUpdate

## Example Usage

```typescript
import { AmountDecimalUpdate } from "@moovio/sdk/models/components";

let value: AmountDecimalUpdate = {
  currency: "USD",
  valueDecimal: "12.987654321",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                            | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | A 3-letter ISO 4217 currency code.                                                                                                    | USD                                                                                                                                   |
| `valueDecimal`                                                                                                                        | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | A decimal-formatted numerical string that represents up to 9 decimal place precision. <br/><br/>For example, $12.987654321 is '12.987654321'. | 12.987654321                                                                                                                          |