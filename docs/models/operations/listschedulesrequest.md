# ListSchedulesRequest

## Example Usage

```typescript
import { ListSchedulesRequest } from "@moovio/sdk/models/operations";

let value: ListSchedulesRequest = {
  skip: 60,
  count: 20,
  accountID: "c9b740a2-7ae9-437a-a3bc-8d38ebc395a8",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `skip`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 60                                                       |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 20                                                       |
| `hydrate`                                                | [operations.Hydrate](../../models/operations/hydrate.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |