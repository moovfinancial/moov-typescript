# EnrichedIndustries

## Example Usage

```typescript
import { EnrichedIndustries } from "@moovio/sdk/models/components";

let value: EnrichedIndustries = {
  industries: [
    {
      industry: "clothing-accessories",
      displayName: "Clothing & Accessories",
      category: "retail",
      categoryDisplayName: "Retail",
      defaultMcc: "5651",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `industries`                                                                 | [components.IndustryTaxonomy](../../models/components/industrytaxonomy.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |