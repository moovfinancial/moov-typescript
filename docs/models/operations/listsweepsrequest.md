# ListSweepsRequest

## Example Usage

```typescript
import { ListSweepsRequest } from "@moovio/sdk/models/operations";

let value: ListSweepsRequest = {
  accountID: "03c68da9-a119-45fd-ae29-0b0a3940a7b0",
  walletID: "02c3122d-9c4a-4e8d-a3f1-c318537fa4f4",
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