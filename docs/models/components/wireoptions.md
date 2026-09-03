# WireOptions

Wire-specific options returned on a transfer.

## Example Usage

```typescript
import { WireOptions } from "@moovio/sdk/models/components";

let value: WireOptions = {
  beneficiaryReference: "INV-2026-001",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `beneficiaryReference`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Optional beneficiary reference for the wire transfer. Maximum 15 characters. | INV-2026-001                                                                 |