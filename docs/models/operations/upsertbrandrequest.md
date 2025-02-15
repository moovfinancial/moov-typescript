# UpsertBrandRequest

## Example Usage

```typescript
import { UpsertBrandRequest } from "@moovio/sdk/models/operations";

let value: UpsertBrandRequest = {
  accountID: "b0a34cf5-d1ac-426e-8109-6ce4679fb64f",
  brandProperties: {
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
| `accountID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `brandProperties`                                                        | [components.BrandProperties](../../models/components/brandproperties.md) | :heavy_check_mark:                                                       | N/A                                                                      |