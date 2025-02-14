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
        title: "AC, Refrigeration Repair",
        naics: "811412",
        sic: "7623",
        mcc: "7623",
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