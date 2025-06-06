# UpdateRepresentative

## Example Usage

```typescript
import { UpdateRepresentative } from "@moovio/sdk/models/components";

let value: UpdateRepresentative = {
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
  address: {
    addressLine1: "123 Main Street",
    addressLine2: "Apt 302",
    city: "Boulder",
    stateOrProvince: "CO",
    postalCode: "80301",
    country: "US",
  },
  birthDate: null,
  responsibilities: {
    ownershipPercentage: 38,
    jobTitle: "CEO",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | [components.IndividualNameUpdate](../../models/components/individualnameupdate.md)                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `phone`                                                                                                    | [components.Phone](../../models/components/phone.md)                                                       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `email`                                                                                                    | *components.Email*                                                                                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `address`                                                                                                  | [components.UpdateRepresentativeAddress](../../models/components/updaterepresentativeaddress.md)           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `birthDate`                                                                                                | [components.UpdateRepresentativeBirthDate](../../models/components/updaterepresentativebirthdate.md)       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `governmentID`                                                                                             | [components.UpdateRepresentativeGovernmentID](../../models/components/updaterepresentativegovernmentid.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `responsibilities`                                                                                         | [components.Responsibilities](../../models/components/responsibilities.md)                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |