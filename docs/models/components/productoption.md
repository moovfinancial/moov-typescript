# ProductOption

Represents a single product option within a group.

## Example Usage

```typescript
import { ProductOption } from "@moovio/sdk/models/components";

let value: ProductOption = {
  name: "<value>",
  priceModifier: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  images: [
    {
      imageID: "f7be8907-e233-4bcb-8b74-4d8d7ceefe37",
      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      publicID: "q7lKWleAy9fUNhEGezQ1g",
    },
  ],
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                            | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | The display name of a product option.                                                                                                             |
| `description`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | A detailed description of the option.<br/><br/>- Must be valid UTF-8 text<br/>- Supports Markdown for formatting<br/>- HTML is not permitted and will be rejected |
| `priceModifier`                                                                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                              | :heavy_minus_sign:                                                                                                                                | The adjustment applied to a product's base price by this option. Can be negative, positive, or zero.                                              |
| `images`                                                                                                                                          | [components.ProductImageMetadata](../../models/components/productimagemetadata.md)[]                                                              | :heavy_minus_sign:                                                                                                                                | The images associated with this option.                                                                                                           |