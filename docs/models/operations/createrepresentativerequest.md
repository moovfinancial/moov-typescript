# CreateRepresentativeRequest

## Example Usage

```typescript
import { CreateRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: CreateRepresentativeRequest = {
  accountID: "e25112da-25e0-4622-8983-5fa2c9529e55",
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
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the account.                                                                 |
| `createRepresentative`                                                             | [components.CreateRepresentative](../../models/components/createrepresentative.md) | :heavy_check_mark:                                                                 | N/A                                                                                |