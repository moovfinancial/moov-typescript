# CancelScheduleRequest

## Example Usage

```typescript
import { CancelScheduleRequest } from "@moovio/sdk/models/operations";

let value: CancelScheduleRequest = {
  accountID: "bac21573-cbeb-41a6-a494-89805c58533b",
  scheduleID: "e6a77d7e-911f-4696-a223-985056cb33aa",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `scheduleID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |