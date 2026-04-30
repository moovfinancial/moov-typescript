# ListEventTypesResponse

## Example Usage

```typescript
import { ListEventTypesResponse } from "@moovio/sdk/models/operations";

let value: ListEventTypesResponse = {
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
  result: [],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.EventType](../../models/components/eventtype.md)[] | :heavy_check_mark:                                             | N/A                                                            |