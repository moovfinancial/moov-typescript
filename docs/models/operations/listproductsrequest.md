# ListProductsRequest

## Example Usage

```typescript
import { ListProductsRequest } from "@moovio/sdk/models/operations";

let value: ListProductsRequest = {
  accountID: "7fb654e2-68ad-4f4d-83c2-405581c205be",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `accountID`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `title`                                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | Allows filtering products by title. This supports partial matches and is case-insensitive |                                                                                           |
| `skip`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 60                                                                                        |
| `count`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 20                                                                                        |