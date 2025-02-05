# DisableCapabilityRequest

## Example Usage

```typescript
import { DisableCapabilityRequest } from "@moovio/sdk/models/operations";

let value: DisableCapabilityRequest = {
  accountID: "140323a0-1254-44cf-a8f6-1647a7eeb726",
  capabilityID: "send-funds",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `capabilityID`                                                     | [components.CapabilityID](../../models/components/capabilityid.md) | :heavy_check_mark:                                                 | Moov account capabilities.                                         |