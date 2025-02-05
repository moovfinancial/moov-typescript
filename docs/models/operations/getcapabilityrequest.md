# GetCapabilityRequest

## Example Usage

```typescript
import { GetCapabilityRequest } from "@moovio/sdk/models/operations";

let value: GetCapabilityRequest = {
  accountID: "256a445c-9115-4cbb-8c48-8bf4ca9cf02c",
  capabilityID: "collect-funds",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `capabilityID`                                                     | [components.CapabilityID](../../models/components/capabilityid.md) | :heavy_check_mark:                                                 | Moov account capabilities.                                         |