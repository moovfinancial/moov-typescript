# UpdateIssuingControlsMerchantRestrictions

Replaces the merchant restrictions. Set to `null` to remove.

## Example Usage

```typescript
import { UpdateIssuingControlsMerchantRestrictions } from "@moovio/sdk/models/components";

let value: UpdateIssuingControlsMerchantRestrictions = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                 | [components.IssuingControlsRestrictionMode](../../models/components/issuingcontrolsrestrictionmode.md) | :heavy_minus_sign:                                                                                     | Whether the listed merchants are the only ones allowed, or the ones to block.                          |
| `merchants`                                                                                            | [components.MerchantEntry](../../models/components/merchantentry.md)[]                                 | :heavy_minus_sign:                                                                                     | The merchants to allow or block.                                                                       |