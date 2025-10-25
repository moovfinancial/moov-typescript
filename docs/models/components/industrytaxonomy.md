# IndustryTaxonomy

A structured industry taxonomy entry with category and mapped to a default MCC code.

## Example Usage

```typescript
import { IndustryTaxonomy } from "@moovio/sdk/models/components";

let value: IndustryTaxonomy = {
  industry: "clothing-accessories",
  displayName: "Clothing & Accessories",
  category: "retail",
  categoryDisplayName: "Retail",
  defaultMcc: "5651",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `industry`                                  | *string*                                    | :heavy_check_mark:                          | Classification identifier for the industry. | clothing-accessories                        |
| `displayName`                               | *string*                                    | :heavy_check_mark:                          | Display name of the industry                | Clothing & Accessories                      |
| `category`                                  | *string*                                    | :heavy_check_mark:                          | Category slug                               | retail                                      |
| `categoryDisplayName`                       | *string*                                    | :heavy_check_mark:                          | Human-readable category label               | Retail                                      |
| `defaultMcc`                                | *string*                                    | :heavy_check_mark:                          | Default Merchant Category Code              | 5651                                        |