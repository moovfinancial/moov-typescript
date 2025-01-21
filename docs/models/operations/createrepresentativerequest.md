# CreateRepresentativeRequest

## Example Usage

```typescript
import { CreateRepresentativeRequest } from "moov-sdk/models/operations";

let value: CreateRepresentativeRequest = {
  accountID: "2fc79c7b-c739-4880-8c86-d34a6447ccce",
  createRepresentative: {
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
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                     | [components.Versions](../../models/components/versions.md)                         | :heavy_minus_sign:                                                                 | Specify an API version.                                                            |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the account.                                                                 |
| `createRepresentative`                                                             | [components.CreateRepresentative](../../models/components/createrepresentative.md) | :heavy_check_mark:                                                                 | N/A                                                                                |