# AssignAccountCountriesRequest

## Example Usage

```typescript
import { AssignAccountCountriesRequest } from "@moovio/sdk/models/operations";

let value: AssignAccountCountriesRequest = {
  accountID: "3badeefc-f92e-4499-8e74-942adcb814be",
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