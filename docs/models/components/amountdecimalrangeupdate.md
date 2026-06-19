# AmountDecimalRangeUpdate

A range of values that an AmountDecimal can take.

If either `minimum` or `maximum` is omitted, the range is "open" on that end:

`minimum` specified: `amt >= minimum`
`maximum` specified: `amt <= maximum`
both specified: `minimum <= amt <= maximum`

## Example Usage

```typescript
import { AmountDecimalRangeUpdate } from "@moovio/sdk/models/components";

let value: AmountDecimalRangeUpdate = {
  minimum: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  maximum: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `minimum`                                                                        | [components.AmountDecimalUpdate](../../models/components/amountdecimalupdate.md) | :heavy_minus_sign:                                                               | Minimum amount allowed in the range                                              |
| `maximum`                                                                        | [components.AmountDecimalUpdate](../../models/components/amountdecimalupdate.md) | :heavy_minus_sign:                                                               | Maximum amount allowed in the range                                              |