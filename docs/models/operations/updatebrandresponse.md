# UpdateBrandResponse

## Example Usage

```typescript
import { UpdateBrandResponse } from "@moovio/sdk/models/operations";

let value: UpdateBrandResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    colors: {
      dark: {
        accent: "#111111",
      },
      light: {
        accent: "#111111",
      },
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.BrandProperties](../../models/components/brandproperties.md) | :heavy_check_mark:                                                       | N/A                                                                      |