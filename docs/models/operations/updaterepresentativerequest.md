# UpdateRepresentativeRequest

## Example Usage

```typescript
import { UpdateRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: UpdateRepresentativeRequest = {
  accountID: "a6d47b85-282f-482b-81c7-20f4f881fb81",
  representativeID: "65810800-6063-4361-856d-e449250618af",
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
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the account.                                                                 |
| `representativeID`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the representative.                                                          |
| `updateRepresentative`                                                             | [components.UpdateRepresentative](../../models/components/updaterepresentative.md) | :heavy_check_mark:                                                                 | N/A                                                                                |