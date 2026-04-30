# UpdateCardExpiration

## Example Usage

```typescript
import { UpdateCardExpiration } from "@moovio/sdk/models/components";

let value: UpdateCardExpiration = {
  month: "01",
  year: "21",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `month`                           | *string*                          | :heavy_minus_sign:                | Two-digit month the card expires. |
| `year`                            | *string*                          | :heavy_minus_sign:                | Two-digit year the card expires.  |