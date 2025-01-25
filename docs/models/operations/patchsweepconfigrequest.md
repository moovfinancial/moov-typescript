# PatchSweepConfigRequest

## Example Usage

```typescript
import { PatchSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: PatchSweepConfigRequest = {
  accountID: "b0e737d4-e119-48a0-84b5-4dcbaf02744f",
  sweepConfigID: "0e207e4e-d46e-4103-a320-b27156ebe726",
  patchSweepConfig: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `xMoovVersion`                                                             | [components.Versions](../../models/components/versions.md)                 | :heavy_minus_sign:                                                         | Specify an API version.                                                    |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sweepConfigID`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `patchSweepConfig`                                                         | [components.PatchSweepConfig](../../models/components/patchsweepconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |