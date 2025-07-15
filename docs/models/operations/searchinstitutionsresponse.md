# SearchInstitutionsResponse

## Example Usage

```typescript
import { SearchInstitutionsResponse } from "@moovio/sdk/models/operations";

let value: SearchInstitutionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    ach: [],
    rtp: [],
    wire: null,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.InstitutionsSearchResponse](../../models/components/institutionssearchresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |