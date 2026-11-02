# Schedule

Overrides the time of day this wallet's sweep runs. Sweeps only run on US banking days.

## Example Usage

```typescript
import { Schedule } from "@moovio/sdk/models/components";

let value: Schedule = {
  cutoffTime: "<value>",
  timezone: "America/New_York",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `cutoffTime`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Time of day the sweep runs, in 24-hour `HH:mm` format. Must fall on a 15-minute mark (`:00`, `:15`, `:30`, `:45`). |                                                                                                                    |
| `timezone`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | IANA timezone for `cutoffTime`, such as `America/New_York` or `UTC`.                                               | America/New_York                                                                                                   |
| `frequency`                                                                                                        | [components.SweepScheduleFrequency](../../models/components/sweepschedulefrequency.md)                             | :heavy_minus_sign:                                                                                                 | How often the sweep runs. Defaults to `daily`.                                                                     |                                                                                                                    |