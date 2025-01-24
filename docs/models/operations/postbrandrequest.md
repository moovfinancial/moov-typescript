# PostBrandRequest

## Example Usage

```typescript
import { PostBrandRequest } from "moov-sdk/models/operations";

let value: PostBrandRequest = {
  accountID: "abc5e247-94e7-41df-b589-c2db09079ae4",
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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `brand`                                                    | [components.Brand](../../models/components/brand.md)       | :heavy_check_mark:                                         | N/A                                                        |