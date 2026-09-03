# AllowedSchedule

Limits card usage to specific days and times.

## Example Usage

```typescript
import { AllowedSchedule } from "@moovio/sdk/models/components";

let value: AllowedSchedule = {
  timezone: "Asia/Phnom_Penh",
  windows: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | IANA timezone string used to evaluate window boundaries against the authorization time.       |
| `windows`                                                                                     | [components.ScheduleWindow](../../models/components/schedulewindow.md)[]                      | :heavy_check_mark:                                                                            | Time windows during which the card may authorize. Any matching window allows the transaction. |