# CancelScheduleRequest

## Example Usage

```typescript
import { CancelScheduleRequest } from "moov-sdk/models/operations";

let value: CancelScheduleRequest = {
  accountID: "e3c71ccb-ff2c-4abf-ad6e-ebe7b09b6d74",
  scheduleID: "eaf7aa3b-1923-4f68-ba7b-0a5e20083c03",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `scheduleID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |