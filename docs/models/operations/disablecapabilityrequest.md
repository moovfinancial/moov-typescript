# DisableCapabilityRequest

## Example Usage

```typescript
import { DisableCapabilityRequest } from "@moovio/sdk/models/operations";

let value: DisableCapabilityRequest = {
  accountID: "41eb9cd7-ee49-488f-94fe-7dca53ad0a7e",
  capabilityID: "collect-funds",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `capabilityID`                                                     | [components.CapabilityID](../../models/components/capabilityid.md) | :heavy_check_mark:                                                 | Moov account capabilities.                                         |