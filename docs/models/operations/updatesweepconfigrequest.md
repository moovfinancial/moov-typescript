# UpdateSweepConfigRequest

## Example Usage

```typescript
import { UpdateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: UpdateSweepConfigRequest = {
  accountID: "f17cf16c-9e18-49dd-b790-b0a8f26d8d8a",
  sweepConfigID: "0e2c95fd-4355-42ee-9d7c-5de878316cad",
  patchSweepConfig: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sweepConfigID`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `patchSweepConfig`                                                         | [components.PatchSweepConfig](../../models/components/patchsweepconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |