# Profile

Describes a Moov account profile. A profile will have a business or an individual, depending on the account's type.

## Example Usage

```typescript
import { Profile } from "@moovio/sdk/models/components";

let value: Profile = {
  individual: {
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
  },
  business: {
    legalBusinessName: "Classbooker, LLC",
    businessType: "llc",
    address: {
      addressLine1: "123 Main Street",
      addressLine2: "Apt 302",
      city: "Boulder",
      stateOrProvince: "CO",
      postalCode: "80301",
      country: "US",
    },
    phone: {
      number: "8185551212",
      countryCode: "1",
    },
    email: "jordan.lee@classbooker.dev",
    description: "Local fitness gym paying out instructors",
    representatives: [
      {
        representativeID: "80c48471-4be2-4148-a022-9aa1b4c31942",
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
        responsibilities: {
          ownershipPercentage: 38,
          jobTitle: "CEO",
        },
        createdOn: new Date("2024-09-19T12:49:19.971Z"),
        updatedOn: new Date("2025-11-22T01:13:47.243Z"),
      },
    ],
    ownersProvided: false,
    industryCodes: {
      naics: "713940",
      sic: "7991",
      mcc: "7997",
    },
  },
  guest: {
    name: "Guest 75e5fbb8",
    phone: {
      number: "8185551212",
      countryCode: "1",
    },
    email: "jordan.lee@classbooker.dev",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `individual`                                                                 | [components.IndividualProfile](../../models/components/individualprofile.md) | :heavy_minus_sign:                                                           | Describes an individual.                                                     |
| `business`                                                                   | [components.BusinessProfile](../../models/components/businessprofile.md)     | :heavy_minus_sign:                                                           | Describes a business.                                                        |
| `guest`                                                                      | [components.GuestProfile](../../models/components/guestprofile.md)           | :heavy_minus_sign:                                                           | Describes a guest account profile.                                           |