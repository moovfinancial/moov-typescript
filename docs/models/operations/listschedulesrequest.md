# ListSchedulesRequest

## Example Usage

```typescript
import { ListSchedulesRequest } from "@moovio/sdk/models/operations";

let value: ListSchedulesRequest = {
  skip: 60,
  count: 20,
  accountID: "b1f33857-03ce-43c0-a062-2adc5ed87021",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `skip`                                                     | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 60                                                         |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 20                                                         |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |