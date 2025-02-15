# ListSweepsRequest

## Example Usage

```typescript
import { ListSweepsRequest } from "@moovio/sdk/models/operations";

let value: ListSweepsRequest = {
  accountID: "b0a3940a-7b08-402c-b312-2d9c4ae8d3f1",
  walletID: "318537fa-4f4b-44ca-9973-9d0be945b501",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `walletID`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `skip`                                                           | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 60                                                               |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 20                                                               |
| `status`                                                         | [components.SweepStatus](../../models/components/sweepstatus.md) | :heavy_minus_sign:                                               | Optional parameter to filter by sweep status.                    |                                                                  |
| `statementDescriptor`                                            | *string*                                                         | :heavy_minus_sign:                                               | Optional string to filter by statement descriptor.               |                                                                  |