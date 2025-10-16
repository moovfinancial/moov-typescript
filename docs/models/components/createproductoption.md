# CreateProductOption

## Example Usage

```typescript
import { CreateProductOption } from "@moovio/sdk/models/components";

let value: CreateProductOption = {
  name: "<value>",
  priceModifier: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                            | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | The display name of a product option.                                                                                                             |
| `description`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | A detailed description of the option.<br/><br/>- Must be valid UTF-8 text<br/>- Supports Markdown for formatting<br/>- HTML is not permitted and will be rejected |
| `priceModifier`                                                                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                              | :heavy_minus_sign:                                                                                                                                | The adjustment applied to a product's base price by this option. Can be negative, positive, or zero.                                              |
| `images`                                                                                                                                          | [components.AssignProductImage](../../models/components/assignproductimage.md)[]                                                                  | :heavy_minus_sign:                                                                                                                                | Assign previously uploaded images to a product or option.                                                                                         |