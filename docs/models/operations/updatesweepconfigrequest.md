# UpdateSweepConfigRequest

## Example Usage

```typescript
import { UpdateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: UpdateSweepConfigRequest = {
  accountID: "2f00dc33-7fad-4d29-9f17-cf16c9e189dd",
  sweepConfigID: "90b0a8f2-6d8d-48ae-b0e2-c95fd43552ee",
  patchSweepConfig: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sweepConfigID`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `patchSweepConfig`                                                         | [components.PatchSweepConfig](../../models/components/patchsweepconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |