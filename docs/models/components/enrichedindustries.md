# EnrichedIndustries

## Example Usage

```typescript
import { EnrichedIndustries } from "@moovio/sdk/models/components";

let value: EnrichedIndustries = {
  industries: [
    {
      title: "AC, Refrigeration Repair",
      naics: "811412",
      sic: "7623",
      mcc: "7623",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `industries`                                                                 | [components.EnrichedIndustry](../../models/components/enrichedindustry.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |