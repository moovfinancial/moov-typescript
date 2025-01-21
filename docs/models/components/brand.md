# Brand

## Example Usage

```typescript
import { Brand } from "moov-sdk/models/components";

let value: Brand = {
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

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `colors`                                               | [components.Colors](../../models/components/colors.md) | :heavy_check_mark:                                     | Set brand accent colors for light and dark modes.      |