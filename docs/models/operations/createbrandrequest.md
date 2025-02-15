# CreateBrandRequest

## Example Usage

```typescript
import { CreateBrandRequest } from "@moovio/sdk/models/operations";

let value: CreateBrandRequest = {
  accountID: "ed8df1af-f929-403f-95a4-fb5c163a1648",
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