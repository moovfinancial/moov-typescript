# MerchantRestrictions

Restricts card usage to specific merchants, independent of merchant category.

## Example Usage

```typescript
import { MerchantRestrictions } from "@moovio/sdk/models/components";

let value: MerchantRestrictions = {
  mode: "allow",
  merchants: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                 | [components.IssuingControlsRestrictionMode](../../models/components/issuingcontrolsrestrictionmode.md) | :heavy_check_mark:                                                                                     | Whether the listed items should be allowed (`allow`) or blocked (`block`).                             |
| `merchants`                                                                                            | [components.MerchantEntry](../../models/components/merchantentry.md)[]                                 | :heavy_check_mark:                                                                                     | The merchants to allow or block.                                                                       |