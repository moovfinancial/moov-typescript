# CreateBrandRequest

## Example Usage

```typescript
import { CreateBrandRequest } from "@moovio/sdk/models/operations";

let value: CreateBrandRequest = {
  accountID: "8df1aff9-2903-4f5a-84fb-5c163a16485b",
  brand: {
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
| `accountID`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `brand`                                              | [components.Brand](../../models/components/brand.md) | :heavy_check_mark:                                   | N/A                                                  |