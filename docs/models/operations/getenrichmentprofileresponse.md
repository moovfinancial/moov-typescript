# GetEnrichmentProfileResponse

## Example Usage

```typescript
import { GetEnrichmentProfileResponse } from "@moovio/sdk/models/operations";

let value: GetEnrichmentProfileResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    business: {
      address: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      email: "jordan.lee@classbooker.dev",
      industryCodes: {
        naics: "713940",
        sic: "7991",
      },
      phone: {
        number: "8185551212",
        countryCode: "1",
      },
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.EnrichedBusinessResponse](../../models/components/enrichedbusinessresponse.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |