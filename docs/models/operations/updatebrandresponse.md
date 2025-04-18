# UpdateBrandResponse

## Example Usage

```typescript
import { UpdateBrandResponse } from "@moovio/sdk/models/operations";

let value: UpdateBrandResponse = {
  headers: {
    "key": [
      "<value>",
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