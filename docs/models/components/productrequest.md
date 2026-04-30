# ProductRequest

Request to create or update a product.

## Example Usage

```typescript
import { ProductRequest } from "@moovio/sdk/models/components";

let value: ProductRequest = {
  title: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  optionGroups: [
    {
      name: "<value>",
      minSelect: 977644,
      maxSelect: 374163,
      options: [
        {
          name: "<value>",
          priceModifier: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                            | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A detailed description of the product.<br/><br/>- Must be valid UTF-8 text<br/>- Supports Markdown for formatting<br/>- HTML is not permitted and will be rejected |
| `basePrice`                                                                                                                                        | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                               | :heavy_check_mark:                                                                                                                                 | A product's starting price, before applying modifiers.                                                                                             |
| `images`                                                                                                                                           | [components.AssignProductImage](../../models/components/assignproductimage.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                 | Assign previously uploaded images to a product or option.                                                                                          |
| `optionGroups`                                                                                                                                     | [components.CreateProductOptionGroup](../../models/components/createproductoptiongroup.md)[]                                                       | :heavy_minus_sign:                                                                                                                                 | Optional configuration options for a product, such as size or color.                                                                               |