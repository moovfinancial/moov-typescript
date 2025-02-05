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
    transferID: "a093fc26-72bd-4024-bf62-1ec98c5ab92f",
    createdOn: new Date("2024-06-21T17:27:04.014Z"),
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | *operations.CreateTransferResponseResult* | :heavy_check_mark:                        | N/A                                       |