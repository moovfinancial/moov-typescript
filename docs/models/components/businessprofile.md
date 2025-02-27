# BusinessProfile

Describes a business.

## Example Usage

```typescript
import { BusinessProfile } from "@moovio/sdk/models/components";

let value: BusinessProfile = {
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
      representativeID: "29e244c2-76c7-4317-b3a3-8aeea30c51d8",
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
      createdOn: new Date("2024-09-26T10:42:41.389Z"),
      updatedOn: new Date("2025-11-08T14:28:35.152Z"),
    },
  ],
  ownersProvided: false,
  industryCodes: {
    naics: "713940",
    sic: "7991",
    mcc: "7997",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `legalBusinessName`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | The legal name under which the entity is registered.                                         | Classbooker, LLC                                                                             |
| `doingBusinessAs`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | A registered trade name under which the business operates, if different from its legal name. |                                                                                              |
| `businessType`                                                                               | [components.BusinessType](../../models/components/businesstype.md)                           | :heavy_minus_sign:                                                                           | The type of entity represented by this business.                                             | llc                                                                                          |
| `address`                                                                                    | [components.Address](../../models/components/address.md)                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `phone`                                                                                      | [components.PhoneNumber](../../models/components/phonenumber.md)                             | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | jordan.lee@classbooker.dev                                                                   |
| `website`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | Local fitness gym paying out instructors                                                     |
| `taxIDProvided`                                                                              | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Indicates whether a tax ID has been provided for this business.                              |                                                                                              |
| `representatives`                                                                            | [components.Representative](../../models/components/representative.md)[]                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `ownersProvided`                                                                             | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `industryCodes`                                                                              | [components.IndustryCodes](../../models/components/industrycodes.md)                         | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `primaryRegulator`                                                                           | [components.PrimaryRegulator](../../models/components/primaryregulator.md)                   | :heavy_minus_sign:                                                                           | If the business is a financial institution, this field describes its primary regulator.      |                                                                                              |