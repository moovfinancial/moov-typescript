# CancelScheduleRequest

## Example Usage

```typescript
import { CancelScheduleRequest } from "@moovio/sdk/models/operations";

let value: CancelScheduleRequest = {
  accountID: "0bb46211-7116-4b66-816d-2a31eb93c5fe",
  scheduleID: "066f852e-ef54-453f-b92c-434e1e333658",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | Your Moov account ID as the partner running the transfers. |
| `scheduleID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |