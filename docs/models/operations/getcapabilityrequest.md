# GetCapabilityRequest

## Example Usage

```typescript
import { GetCapabilityRequest } from "moov-sdk/models/operations";

let value: GetCapabilityRequest = {
  accountID: "4401dcbb-1400-4030-803c-0fadac44a982",
  capabilityID: "collect-funds",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `xMoovVersion`                                                     | [components.Versions](../../models/components/versions.md)         | :heavy_minus_sign:                                                 | Specify an API version.                                            |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `capabilityID`                                                     | [components.CapabilityID](../../models/components/capabilityid.md) | :heavy_check_mark:                                                 | Moov account capabilities.                                         |