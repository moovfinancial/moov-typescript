# DisableCapabilityRequest

## Example Usage

```typescript
import { DisableCapabilityRequest } from "@moovio/sdk/models/operations";

let value: DisableCapabilityRequest = {
  accountID: "950a0122-c127-42b7-be0d-2e580b3ea442",
  capabilityID: "collect-funds",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `xMoovVersion`                                                     | [components.Versions](../../models/components/versions.md)         | :heavy_minus_sign:                                                 | Specify an API version.                                            |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `capabilityID`                                                     | [components.CapabilityID](../../models/components/capabilityid.md) | :heavy_check_mark:                                                 | Moov account capabilities.                                         |