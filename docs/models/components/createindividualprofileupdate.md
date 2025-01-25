# CreateIndividualProfileUpdate

## Example Usage

```typescript
import { CreateIndividualProfileUpdate } from "@moovio/sdk/models/components";

let value: CreateIndividualProfileUpdate = {
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
  birthDate: {
    day: 9,
    month: 11,
    year: 1989,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | [components.IndividualNameUpdate](../../models/components/individualnameupdate.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `phone`                                                                            | [components.PhoneNumber](../../models/components/phonenumber.md)                   | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `email`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | jordan.lee@classbooker.dev                                                         |
| `address`                                                                          | [components.AddressUpdate](../../models/components/addressupdate.md)               | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `birthDate`                                                                        | [components.BirthDateUpdate](../../models/components/birthdateupdate.md)           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `governmentID`                                                                     | [components.GovernmentID](../../models/components/governmentid.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |