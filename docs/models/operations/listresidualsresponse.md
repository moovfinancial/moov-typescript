# ListResidualsResponse

## Example Usage

```typescript
import { ListResidualsResponse } from "@moovio/sdk/models/operations";

let value: ListResidualsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `headers`                                                    | Record<string, *string*[]>                                   | :heavy_check_mark:                                           | N/A                                                          |
| `result`                                                     | [components.Residual](../../models/components/residual.md)[] | :heavy_check_mark:                                           | N/A                                                          |