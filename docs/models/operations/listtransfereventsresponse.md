# ListTransferEventsResponse

## Example Usage

```typescript
import { ListTransferEventsResponse } from "@moovio/sdk/models/operations";

let value: ListTransferEventsResponse = {
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.TransferEvent](../../models/components/transferevent.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |