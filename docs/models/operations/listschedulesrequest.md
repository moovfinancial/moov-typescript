# ListSchedulesRequest

## Example Usage

```typescript
import { ListSchedulesRequest } from "@moovio/sdk/models/operations";

let value: ListSchedulesRequest = {
  skip: 60,
  count: 20,
  accountID: "02d4ceb7-4faf-4c25-801c-273246deba20",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `skip`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 60                                                       |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 20                                                       |
| `hydrate`                                                | [operations.Hydrate](../../models/operations/hydrate.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |