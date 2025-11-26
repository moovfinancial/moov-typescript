# UpdateRepresentativeRequest

## Example Usage

```typescript
import { UpdateRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: UpdateRepresentativeRequest = {
  accountID: "de33c6ca-b84b-4de5-b3dc-69fefc20b1c2",
  representativeID: "a167c3e8-57e9-4b14-ad07-1db0de046490",
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
    responsibilities: null,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the account.                                                                 |
| `representativeID`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the representative.                                                          |
| `updateRepresentative`                                                             | [components.UpdateRepresentative](../../models/components/updaterepresentative.md) | :heavy_check_mark:                                                                 | N/A                                                                                |