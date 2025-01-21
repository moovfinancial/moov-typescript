# Amount

## Example Usage

```typescript
import { Amount } from "moov-sdk/models/components";

let value: Amount = {
  currency: "Egyptian Pound",
  value: 221161,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | A 3-letter ISO 4217 currency code.                                                                                            |
| `value`                                                                                                                       | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | Quantity in the smallest unit of the specified currency. <br/><br/>In USD this is cents, for example, $12.04 is 1204 and $0.99 is 99. |