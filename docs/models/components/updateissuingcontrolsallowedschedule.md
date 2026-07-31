# UpdateIssuingControlsAllowedSchedule

Replaces the allowed schedule. Set to `null` to remove all schedule restrictions.

## Example Usage

```typescript
import { UpdateIssuingControlsAllowedSchedule } from "@moovio/sdk/models/components";

let value: UpdateIssuingControlsAllowedSchedule = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | IANA timezone string used to evaluate window boundaries against the authorization time.       |
| `windows`                                                                                     | [components.ScheduleWindow](../../models/components/schedulewindow.md)[]                      | :heavy_minus_sign:                                                                            | Time windows during which the card may authorize. Any matching window allows the transaction. |