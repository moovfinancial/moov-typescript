# Representative

Describes a business representative.

## Example Usage

```typescript
import { Representative } from "@moovio/sdk/models/components";

let value: Representative = {
  representativeID: "8eee6252-d93d-4702-b61a-390251f3eafe",
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
  createdOn: new Date("2024-09-25T05:44:49.986Z"),
  updatedOn: new Date("2025-11-23T05:57:14.612Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `representativeID`                                                                                     | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier for this representative.                                                             |                                                                                                        |
| `name`                                                                                                 | [components.IndividualName](../../models/components/individualname.md)                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `phone`                                                                                                | [components.PhoneNumber](../../models/components/phonenumber.md)                                       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `email`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | jordan.lee@classbooker.dev                                                                             |
| `address`                                                                                              | [components.Address](../../models/components/address.md)                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `birthDateProvided`                                                                                    | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Indicates whether this representative's birth date has been provided.                                  |                                                                                                        |
| `governmentIDProvided`                                                                                 | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Indicates whether a government ID (SSN, ITIN, etc.) has been provided for this representative.         |                                                                                                        |
| `responsibilities`                                                                                     | [components.RepresentativeResponsibilities](../../models/components/representativeresponsibilities.md) | :heavy_minus_sign:                                                                                     | Describes the job responsibilities of a business representative.                                       |                                                                                                        |
| `createdOn`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `updatedOn`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `disabledOn`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |