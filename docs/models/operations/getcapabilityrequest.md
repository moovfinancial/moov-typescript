# GetCapabilityRequest

## Example Usage

```typescript
import { GetCapabilityRequest } from "@moovio/sdk/models/operations";

let value: GetCapabilityRequest = {
  accountID: "834b0d78-8a51-4528-85ff-99fec5537fe1",
  capabilityID: "card-issuing",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `capabilityID`                                                     | [components.CapabilityID](../../models/components/capabilityid.md) | :heavy_check_mark:                                                 | Moov account capabilities.                                         |