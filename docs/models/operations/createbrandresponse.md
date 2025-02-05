# CreateBrandResponse

## Example Usage

```typescript
import { CreateBrandResponse } from "@moovio/sdk/models/operations";

let value: CreateBrandResponse = {
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

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `headers`                                            | Record<string, *string*[]>                           | :heavy_check_mark:                                   | N/A                                                  |
| `result`                                             | [components.Brand](../../models/components/brand.md) | :heavy_check_mark:                                   | N/A                                                  |