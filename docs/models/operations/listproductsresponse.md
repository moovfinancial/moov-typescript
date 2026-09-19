# ListProductsResponse

## Example Usage

```typescript
import { ListProductsResponse } from "@moovio/sdk/models/operations";

let value: ListProductsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Product](../../models/components/product.md)[] | :heavy_check_mark:                                         | N/A                                                        |