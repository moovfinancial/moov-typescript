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
    transferID: "8611c3dc-dfcf-4d88-bf62-c4200989114e",
    createdOn: new Date("2025-01-04T08:31:51.870Z"),
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `headers`                               | Record<string, *string*[]>              | :heavy_check_mark:                      | N/A                                     |
| `result`                                | *operations.CreateTransferResponseBody* | :heavy_check_mark:                      | N/A                                     |