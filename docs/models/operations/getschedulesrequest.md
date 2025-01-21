# GetSchedulesRequest

## Example Usage

```typescript
import { GetSchedulesRequest } from "moov-sdk/models/operations";

let value: GetSchedulesRequest = {
  accountID: "76ce7c24-be12-4f10-9834-95f3de7f4190",
  scheduleID: "d634ea27-98c0-4498-b12c-8ad95824a00e",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `scheduleID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |