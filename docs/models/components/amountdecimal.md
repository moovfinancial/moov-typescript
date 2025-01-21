# AmountDecimal

## Example Usage

```typescript
import { AmountDecimal } from "moov-sdk/models/components";

let value: AmountDecimal = {
  currency: "Mauritius Rupee",
  valueDecimal: "12.987654321",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `currency`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | A 3-letter ISO 4217 currency code.                                                    |                                                                                       |
| `valueDecimal`                                                                        | *string*                                                                              | :heavy_check_mark:                                                                    | A decimal-formatted numerical string that represents up to 9 decimal place precision. | 12.987654321                                                                          |