# ListSchedulesRequest

## Example Usage

```typescript
import { ListSchedulesRequest } from "moov-sdk/models/operations";

let value: ListSchedulesRequest = {
  skip: 60,
  count: 20,
  accountID: "16f077d4-c075-4c61-bb05-7b51d0d1222c",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `skip`                                                     | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 60                                                         |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 20                                                         |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |