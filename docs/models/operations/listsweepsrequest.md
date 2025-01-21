# ListSweepsRequest

## Example Usage

```typescript
import { ListSweepsRequest } from "moov-sdk/models/operations";

let value: ListSweepsRequest = {
  accountID: "48f70f40-12a5-4ec5-9fa0-7e4e995f6aaa",
  walletID: "d96519c6-e27a-49ea-ada5-456dbdedff56",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `xMoovVersion`                                                   | [components.Versions](../../models/components/versions.md)       | :heavy_minus_sign:                                               | Specify an API version.                                          |                                                                  |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `walletID`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `skip`                                                           | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 60                                                               |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 20                                                               |
| `status`                                                         | [components.SweepStatus](../../models/components/sweepstatus.md) | :heavy_minus_sign:                                               | Optional parameter to filter by sweep status.                    |                                                                  |
| `statementDescriptor`                                            | *string*                                                         | :heavy_minus_sign:                                               | Optional string to filter by statement descriptor.               |                                                                  |