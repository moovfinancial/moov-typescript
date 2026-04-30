# UpsertBrandResponse

## Example Usage

```typescript
import { UpsertBrandResponse } from "@moovio/sdk/models/operations";

let value: UpsertBrandResponse = {
  headers: {},
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