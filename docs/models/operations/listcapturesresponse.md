# ListCapturesResponse

## Example Usage

```typescript
import { ListCapturesResponse } from "@moovio/sdk/models/operations";

let value: ListCapturesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Capture](../../models/components/capture.md)[] | :heavy_check_mark:                                         | N/A                                                        |