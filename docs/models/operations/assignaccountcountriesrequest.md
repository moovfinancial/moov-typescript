# AssignAccountCountriesRequest

## Example Usage

```typescript
import { AssignAccountCountriesRequest } from "@moovio/sdk/models/operations";

let value: AssignAccountCountriesRequest = {
  accountID: "5b3d9ff2-f00f-4f27-a7da-c7abb015066e",
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