# ProductOptionGroup

Represents a group of product configuration options, such as size or color.

## Example Usage

```typescript
import { ProductOptionGroup } from "@moovio/sdk/models/components";

let value: ProductOptionGroup = {
  name: "<value>",
  minSelect: 268650,
  maxSelect: 745080,
  options: [
    {
      name: "<value>",
      priceModifier: "-14.89",
      images: [
        {
          imageID: "f7be8907-e233-4bcb-8b74-4d8d7ceefe37",
          link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `description`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A detailed description of the option group.<br/><br/>- Must be valid UTF-8 text<br/>- Supports Markdown for formatting<br/>- HTML is not permitted and will be rejected |
| `minSelect`                                                                                                                                             | *number*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The minimum number of options that must be selected from this group.<br/><br/>A value of 0 indicates that no selection from this group is required.     |
| `maxSelect`                                                                                                                                             | *number*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The maximum number of options that can be selected from this group.                                                                                     |
| `options`                                                                                                                                               | [components.ProductOption](../../models/components/productoption.md)[]                                                                                  | :heavy_check_mark:                                                                                                                                      | The options available within this group.                                                                                                                |