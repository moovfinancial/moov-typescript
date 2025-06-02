# ListIndustriesResponse

## Example Usage

```typescript
import { ListIndustriesResponse } from "@moovio/sdk/models/operations";

let value: ListIndustriesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    industries: [
      {
        industry: "clothing-accessories",
        displayName: "Clothing & Accessories",
        category: "retail",
        categoryDisplayName: "Retail",
        defaultMcc: "5651",
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.EnrichedIndustries](../../models/components/enrichedindustries.md) | :heavy_check_mark:                                                             | N/A                                                                            |