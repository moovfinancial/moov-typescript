# UpdateSweepConfigRequest

## Example Usage

```typescript
import { UpdateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: UpdateSweepConfigRequest = {
  accountID: "<id>",
  sweepConfigID: "<id>",
  patchSweepConfig: {
    schedule: {
      cutoffTime: "<value>",
      timezone: "America/New_York",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sweepConfigID`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `patchSweepConfig`                                                         | [components.PatchSweepConfig](../../models/components/patchsweepconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |