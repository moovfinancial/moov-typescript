# UpdateIssuingControlsMerchantRestrictions

Restricts card usage to specific merchants, independent of merchant category. Set to `null` to remove merchant restrictions.

## Example Usage

```typescript
import { UpdateIssuingControlsMerchantRestrictions } from "@moovio/sdk/models/components";

let value: UpdateIssuingControlsMerchantRestrictions = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                 | [components.IssuingControlsRestrictionMode](../../models/components/issuingcontrolsrestrictionmode.md) | :heavy_minus_sign:                                                                                     | Whether the listed items should be allowed (`allow`) or blocked (`block`).                             |
| `merchants`                                                                                            | [components.MerchantEntry](../../models/components/merchantentry.md)[]                                 | :heavy_minus_sign:                                                                                     | The merchants to allow or block.                                                                       |