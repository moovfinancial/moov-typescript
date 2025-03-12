# ListSchedulesRequest

## Example Usage

```typescript
import { ListSchedulesRequest } from "@moovio/sdk/models/operations";

let value: ListSchedulesRequest = {
  skip: 60,
  count: 20,
  accountID: "c1a5bfc9-b740-4a27-bae9-37a3bc8d38eb",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `skip`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 60                                                       |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 20                                                       |
| `hydrate`                                                | [operations.Hydrate](../../models/operations/hydrate.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |