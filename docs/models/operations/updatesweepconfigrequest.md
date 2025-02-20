# UpdateSweepConfigRequest

## Example Usage

```typescript
import { UpdateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: UpdateSweepConfigRequest = {
  accountID: "dd29f17c-f16c-49e1-a89d-d790b0a8f26d",
  sweepConfigID: "d8ae0e2c-95fd-4435-952e-ed7c5de87831",
  patchSweepConfig: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sweepConfigID`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `patchSweepConfig`                                                         | [components.PatchSweepConfig](../../models/components/patchsweepconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |