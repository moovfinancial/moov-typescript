# IndividualProfile

Describes an individual.

## Example Usage

```typescript
import { IndividualProfile } from "moov-sdk/models/components";

let value: IndividualProfile = {
  name: {
    firstName: "Jordan",
    middleName: "Reese",
    lastName: "Lee",
    suffix: "Jr",
  },
  phone: {
    number: "8185551212",
    countryCode: "1",
  },
  email: "jordan.lee@classbooker.dev",
  address: {
    addressLine1: "123 Main Street",
    addressLine2: "Apt 302",
    city: "Boulder",
    stateOrProvince: "CO",
    postalCode: "80301",
    country: "US",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | [components.IndividualName](../../models/components/individualname.md)                     | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `phone`                                                                                    | [components.PhoneNumber](../../models/components/phonenumber.md)                           | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `email`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | jordan.lee@classbooker.dev                                                                 |
| `address`                                                                                  | [components.Address](../../models/components/address.md)                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `birthDateProvided`                                                                        | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Indicates whether this individual's birth date has been provided.                          |                                                                                            |
| `governmentIDProvided`                                                                     | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Indicates whether a government ID (SSN, ITIN, etc.) has been provided for this individual. |                                                                                            |