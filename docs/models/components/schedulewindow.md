# ScheduleWindow

A window of time during which the card may authorize.

## Example Usage

```typescript
import { ScheduleWindow } from "@moovio/sdk/models/components";

let value: ScheduleWindow = {
  days: [
    "saturday",
  ],
  startTime: "<value>",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `days`                                                                                                            | [components.IssuingScheduleDay](../../models/components/issuingscheduleday.md)[]                                  | :heavy_check_mark:                                                                                                | The days of the week this window applies to.                                                                      |
| `startTime`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Inclusive window start time in 24-hour `HH:MM` format.                                                            |
| `endTime`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Exclusive window end time in 24-hour `HH:MM` format. If earlier than `startTime`, the window wraps past midnight. |