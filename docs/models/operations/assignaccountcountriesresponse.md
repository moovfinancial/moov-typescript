# AssignAccountCountriesResponse

## Example Usage

```typescript
import { AssignAccountCountriesResponse } from "@moovio/sdk/models/operations";

let value: AssignAccountCountriesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    countries: [
      "United States",
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.AccountCountries](../../models/components/accountcountries.md) | :heavy_check_mark:                                                         | N/A                                                                        |