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
    transferID: "321d336a-9ea8-4bac-b9ce-b54aa0b302a8",
    createdOn: new Date("2023-04-27T10:52:20.408Z"),
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | *operations.CreateTransferResponseResult* | :heavy_check_mark:                        | N/A                                       |