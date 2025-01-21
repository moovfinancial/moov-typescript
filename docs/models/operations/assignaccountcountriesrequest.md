# AssignAccountCountriesRequest

## Example Usage

```typescript
import { AssignAccountCountriesRequest } from "moov-sdk/models/operations";

let value: AssignAccountCountriesRequest = {
  accountID: "dfd25d8c-c157-4fe6-9168-e44a8327ccf6",
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
| `xMoovVersion`                                                             | [components.Versions](../../models/components/versions.md)                 | :heavy_minus_sign:                                                         | Specify an API version.                                                    |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `accountCountries`                                                         | [components.AccountCountries](../../models/components/accountcountries.md) | :heavy_check_mark:                                                         | N/A                                                                        |