# UpdateIssuingControlsMerchantCategoryRestrictions

Replaces the merchant category restrictions. Set to `null` to remove.

## Example Usage

```typescript
import { UpdateIssuingControlsMerchantCategoryRestrictions } from "@moovio/sdk/models/components";

let value: UpdateIssuingControlsMerchantCategoryRestrictions = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                       | [components.IssuingControlsRestrictionMode](../../models/components/issuingcontrolsrestrictionmode.md)       | :heavy_minus_sign:                                                                                           | Whether the listed categories are the only ones allowed, or the ones to block.                               |
| `categories`                                                                                                 | [components.IssuingMerchantCategory](../../models/components/issuingmerchantcategory.md)[]                   | :heavy_minus_sign:                                                                                           | Predefined category groups to allow or block.                                                                |
| `customMCCs`                                                                                                 | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | Individual merchant category codes (MCCs) to allow or block, for codes not covered by a predefined category. |
| `exemptMerchants`                                                                                            | [components.MerchantEntry](../../models/components/merchantentry.md)[]                                       | :heavy_minus_sign:                                                                                           | Merchants that are exempt from category restrictions regardless of their category.                           |