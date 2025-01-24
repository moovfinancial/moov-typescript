# AmountUpdate

## Example Usage

```typescript
import { AmountUpdate } from "moov-sdk/models/components";

let value: AmountUpdate = {
  currency: "USD",
  value: 1204,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | A 3-letter ISO 4217 currency code.                                                                                            | USD                                                                                                                           |
| `value`                                                                                                                       | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Quantity in the smallest unit of the specified currency. <br/><br/>In USD this is cents, for example, $12.04 is 1204 and $0.99 is 99. | 1204                                                                                                                          |