# CreateReversalSimulationResponse

## Example Usage

```typescript
import { CreateReversalSimulationResponse } from "@moovio/sdk/models/operations";

let value: CreateReversalSimulationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    authorizationID: "<id>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `headers`                                           | Record<string, *string*[]>                          | :heavy_check_mark:                                  | N/A                                                 |
| `result`                                            | *operations.CreateReversalSimulationResponseResult* | :heavy_check_mark:                                  | N/A                                                 |