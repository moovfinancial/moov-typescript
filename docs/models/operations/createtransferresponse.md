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
    transferID: "de8b88fb-9621-44b3-b21d-336a9ea8bac9",
    createdOn: new Date("2025-09-13T11:06:26.457Z"),
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | *operations.CreateTransferResponseResult* | :heavy_check_mark:                        | N/A                                       |