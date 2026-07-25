# ListProductCategoriesResponse

## Example Usage

```typescript
import { ListProductCategoriesResponse } from "@moovio/sdk/models/operations";

let value: ListProductCategoriesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    categories: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.ProductCategories](../../models/components/productcategories.md) | :heavy_check_mark:                                                           | N/A                                                                          |