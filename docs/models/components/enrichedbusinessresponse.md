# EnrichedBusinessResponse

## Example Usage

```typescript
import { EnrichedBusinessResponse } from "@moovio/sdk/models/components";

let value: EnrichedBusinessResponse = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `business`                                                                               | [components.EnrichedBusinessProfile](../../models/components/enrichedbusinessprofile.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |