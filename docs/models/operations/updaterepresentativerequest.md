# UpdateRepresentativeRequest

## Example Usage

```typescript
import { UpdateRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: UpdateRepresentativeRequest = {
  accountID: "c4ae8d3f-1c31-4853-87fa-4f4b4ca9739d",
  representativeID: "be945b50-1465-4c36-8dc3-52185899f3e0",
  updateRepresentative: {
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
| `representativeID`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the representative.                                                          |
| `updateRepresentative`                                                             | [components.UpdateRepresentative](../../models/components/updaterepresentative.md) | :heavy_check_mark:                                                                 | N/A                                                                                |