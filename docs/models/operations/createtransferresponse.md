# CreateTransferResponse

## Example Usage

```typescript
import { CreateTransferResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    transferID: "78443533-f7a5-4979-9bac-21573cbeb1a6",
    createdOn: new Date("2024-10-21T17:43:48.774Z"),
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | *operations.CreateTransferResponseResult* | :heavy_check_mark:                        | N/A                                       |