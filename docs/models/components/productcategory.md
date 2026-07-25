# ProductCategory

A product category from the product taxonomy.

## Example Usage

```typescript
import { ProductCategory } from "@moovio/sdk/models/components";

let value: ProductCategory = {
  categoryID: "<id>",
  name: "Beverages",
  fullName: "Food, Beverages & Tobacco > Beverages",
  level: 2,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `categoryID`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | The unique identifier for the category.                                         |                                                                                 |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The short display name of the category.                                         | Beverages                                                                       |
| `fullName`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | The full taxonomy path name of the category.                                    | Food, Beverages & Tobacco > Beverages                                           |
| `level`                                                                         | *number*                                                                        | :heavy_check_mark:                                                              | The depth of the category in the taxonomy tree (1 = top-level).                 | 2                                                                               |
| `parentID`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | The identifier of the parent category, if any. Absent for top-level categories. |                                                                                 |