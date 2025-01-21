# DisableCapabilityRequest

## Example Usage

```typescript
import { DisableCapabilityRequest } from "moov-sdk/models/operations";

let value: DisableCapabilityRequest = {
  accountID: "6f86f145-dc4d-417a-9414-75610e14ad5a",
  capabilityID: "transfers",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `xMoovVersion`                                                     | [components.Versions](../../models/components/versions.md)         | :heavy_minus_sign:                                                 | Specify an API version.                                            |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `capabilityID`                                                     | [components.CapabilityID](../../models/components/capabilityid.md) | :heavy_check_mark:                                                 | Moov account capabilities.                                         |