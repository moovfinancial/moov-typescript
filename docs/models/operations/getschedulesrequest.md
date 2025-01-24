# GetSchedulesRequest

## Example Usage

```typescript
import { GetSchedulesRequest } from "moov-sdk/models/operations";

let value: GetSchedulesRequest = {
  accountID: "b321d336-a9ea-48ba-ac9c-eb54aa0b302a",
  scheduleID: "d1da3bb1-4a6c-48d1-ab78-443533f7a597",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `scheduleID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |