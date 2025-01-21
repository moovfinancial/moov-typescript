# PatchSweepConfigRequest

## Example Usage

```typescript
import { PatchSweepConfigRequest } from "moov-sdk/models/operations";

let value: PatchSweepConfigRequest = {
  accountID: "397d50ea-2367-458e-ba5d-b9819681c8d3",
  sweepConfigID: "915f96e5-b2b7-463f-9136-2ee770dc67a7",
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