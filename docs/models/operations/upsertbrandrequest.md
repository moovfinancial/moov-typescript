# UpsertBrandRequest

## Example Usage

```typescript
import { UpsertBrandRequest } from "@moovio/sdk/models/operations";

let value: UpsertBrandRequest = {
  accountID: "a34cf5d1-ac26-4e10-b96c-e4679fb64f2b",
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