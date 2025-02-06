# CreateRepresentative

Describes a business representative to create.

## Example Usage

```typescript
import { CreateRepresentative } from "@moovio/sdk/models/components";

let value: CreateRepresentative = {
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
  responsibilities: {
    ownershipPercentage: 38,
    jobTitle: "CEO",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | [components.IndividualName](../../models/components/individualname.md)                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `phone`                                                                                                | [components.PhoneNumber](../../models/components/phonenumber.md)                                       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `email`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | jordan.lee@classbooker.dev                                                                             |
| `address`                                                                                              | [components.Address](../../models/components/address.md)                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `birthDate`                                                                                            | [components.BirthDate](../../models/components/birthdate.md)                                           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `governmentID`                                                                                         | [components.GovernmentID](../../models/components/governmentid.md)                                     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `responsibilities`                                                                                     | [components.RepresentativeResponsibilities](../../models/components/representativeresponsibilities.md) | :heavy_minus_sign:                                                                                     | Describes the job responsibilities of a business representative.                                       |                                                                                                        |