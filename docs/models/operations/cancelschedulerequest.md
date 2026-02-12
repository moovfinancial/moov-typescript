# CancelScheduleRequest

## Example Usage

```typescript
import { CancelScheduleRequest } from "@moovio/sdk/models/operations";

let value: CancelScheduleRequest = {
  accountID: "<id>",
  scheduleID: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | Your Moov account ID as the partner running the transfers. |
| `scheduleID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |