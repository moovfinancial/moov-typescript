# ListSweepsRequest

## Example Usage

```typescript
import { ListSweepsRequest } from "@moovio/sdk/models/operations";

let value: ListSweepsRequest = {
  accountID: "5c47eb6f-7535-40de-9304-2b31b44b5fb9",
  walletID: "354c13e3-6fe0-4551-b220-088009dcb39b",
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