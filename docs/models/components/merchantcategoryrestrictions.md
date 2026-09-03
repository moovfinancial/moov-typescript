# MerchantCategoryRestrictions

Restricts card usage by merchant category. When not set, all categories are allowed.

## Example Usage

```typescript
import { MerchantCategoryRestrictions } from "@moovio/sdk/models/components";

let value: MerchantCategoryRestrictions = {
  mode: "allow",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                       | [components.IssuingControlsRestrictionMode](../../models/components/issuingcontrolsrestrictionmode.md)       | :heavy_check_mark:                                                                                           | Whether the listed items should be allowed (`allow`) or blocked (`block`).                                   |
| `categories`                                                                                                 | [components.IssuingMerchantCategory](../../models/components/issuingmerchantcategory.md)[]                   | :heavy_minus_sign:                                                                                           | Predefined category groups to allow or block.                                                                |
| `customMCCs`                                                                                                 | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | Individual merchant category codes (MCCs) to allow or block, for codes not covered by a predefined category. |
| `exemptMerchants`                                                                                            | [components.MerchantEntry](../../models/components/merchantentry.md)[]                                       | :heavy_minus_sign:                                                                                           | Merchants that are exempt from category restrictions regardless of their category.                           |