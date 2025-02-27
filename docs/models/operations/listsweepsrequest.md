# ListSweepsRequest

## Example Usage

```typescript
import { ListSweepsRequest } from "@moovio/sdk/models/operations";

let value: ListSweepsRequest = {
  accountID: "a9739d0b-e945-4b50-a146-5c36dc352185",
  walletID: "99f3e001-a822-48f2-b419-e37eb8abb743",
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