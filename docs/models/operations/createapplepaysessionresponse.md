# CreateApplePaySessionResponse

## Example Usage

```typescript
import { CreateApplePaySessionResponse } from "@moovio/sdk/models/operations";

let value: CreateApplePaySessionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: "{\"epochTimestamp\":1733783167685,\"expiresAt\":1733786767685...}",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `headers`                                                     | Record<string, *string*[]>                                    | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `result`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           | {"epochTimestamp":1733783167685,"expiresAt":1733786767685...} |