# ProductCategories

A list of product categories from the product taxonomy.

## Example Usage

```typescript
import { ProductCategories } from "@moovio/sdk/models/components";

let value: ProductCategories = {
  categories: [
    {
      categoryID: "<id>",
      name: "Beverages",
      fullName: "Food, Beverages & Tobacco > Beverages",
      level: 2,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `categories`                                                               | [components.ProductCategory](../../models/components/productcategory.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |