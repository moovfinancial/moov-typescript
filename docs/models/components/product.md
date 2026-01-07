# Product

A good or service offered by a merchant.

## Example Usage

```typescript
import { Product } from "@moovio/sdk/models/components";

let value: Product = {
  productID: "2b09abb7-4d07-4032-9060-1fb05956f839",
  title: "<value>",
  basePrice: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  optionGroups: [
    {
      name: "<value>",
      minSelect: 18424,
      maxSelect: 504490,
      options: [],
    },
  ],
  images: [
    {
      imageID: "f7be8907-e233-4bcb-8b74-4d8d7ceefe37",
      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      publicID: "q7lKWleAy9fUNhEGezQ1g",
    },
  ],
  createdOn: new Date("2024-05-18T14:18:53.943Z"),
  updatedOn: new Date("2025-07-14T15:57:26.940Z"),
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `productID`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Unique identifier for a product.                                                                                                                   |
| `title`                                                                                                                                            | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A detailed description of the product.<br/><br/>- Must be valid UTF-8 text<br/>- Supports Markdown for formatting<br/>- HTML is not permitted and will be rejected |
| `basePrice`                                                                                                                                        | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                               | :heavy_check_mark:                                                                                                                                 | A product's starting price, before applying modifiers.                                                                                             |
| `optionGroups`                                                                                                                                     | [components.ProductOptionGroup](../../models/components/productoptiongroup.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                 | Optional configuration options for a product, such as size or color.                                                                               |
| `images`                                                                                                                                           | [components.ProductImageMetadata](../../models/components/productimagemetadata.md)[]                                                               | :heavy_minus_sign:                                                                                                                                 | Optional images associated with the product.                                                                                                       |
| `createdOn`                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_check_mark:                                                                                                                                 | The date and time when the product was added.                                                                                                      |
| `updatedOn`                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_check_mark:                                                                                                                                 | The date and time when the product was last updated.                                                                                               |
| `disabledOn`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_minus_sign:                                                                                                                                 | The date and time when the product was disabled.                                                                                                   |