# AssignAccountCountriesRequest

## Example Usage

```typescript
import { AssignAccountCountriesRequest } from "@moovio/sdk/models/operations";

let value: AssignAccountCountriesRequest = {
  accountID: "6904a496-2499-49aa-86e5-6ecb1ebf2d29",
  accountCountries: {
    countries: [
      "United States",
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `accountCountries`                                                         | [components.AccountCountries](../../models/components/accountcountries.md) | :heavy_check_mark:                                                         | N/A                                                                        |