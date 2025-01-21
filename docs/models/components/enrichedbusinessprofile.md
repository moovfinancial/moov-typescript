# EnrichedBusinessProfile

## Example Usage

```typescript
import { EnrichedBusinessProfile } from "moov-sdk/models/components";

let value: EnrichedBusinessProfile = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `address`                                                                            | [components.Address](../../models/components/address.md)                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `email`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | jordan.lee@classbooker.dev                                                           |
| `industryCodes`                                                                      | [components.EnrichedIndustryCodes](../../models/components/enrichedindustrycodes.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `legalBusinessName`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `phone`                                                                              | [components.PhoneNumber](../../models/components/phonenumber.md)                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `website`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |