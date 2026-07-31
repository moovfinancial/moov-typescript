# MerchantCategoryRestrictionsError

## Example Usage

```typescript
import { MerchantCategoryRestrictionsError } from "@moovio/sdk/models/components";

let value: MerchantCategoryRestrictionsError = {
  categories: {
    "0": "first element failed validation...",
  },
  customMCCs: {
    "0": "first element failed validation...",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `mode`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `categories`                                                                                   | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | {<br/>"0": "first element failed validation..."<br/>}                                          |
| `customMCCs`                                                                                   | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | {<br/>"0": "first element failed validation..."<br/>}                                          |
| `exemptMerchants`                                                                              | Record<string, [components.MerchantEntryError](../../models/components/merchantentryerror.md)> | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |