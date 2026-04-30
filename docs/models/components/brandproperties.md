# BrandProperties

## Example Usage

```typescript
import { BrandProperties } from "@moovio/sdk/models/components";

let value: BrandProperties = {
  colors: {
    dark: {
      accent: "#111111",
    },
    light: {
      accent: "#111111",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `colors`                                                         | [components.BrandColors](../../models/components/brandcolors.md) | :heavy_check_mark:                                               | Brand colors for light and dark modes.                           |