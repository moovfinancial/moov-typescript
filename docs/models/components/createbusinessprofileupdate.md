# CreateBusinessProfileUpdate

## Example Usage

```typescript
import { CreateBusinessProfileUpdate } from "moov-sdk/models/components";

let value: CreateBusinessProfileUpdate = {
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
  taxID: {
    ein: {
      number: "12-3456789",
    },
  },
  industryCodes: {
    naics: "713940",
    sic: "7991",
    mcc: "7997",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `legalBusinessName`                                                                                            | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The legal name under which the entity is registered.                                                           | Classbooker, LLC                                                                                               |
| `doingBusinessAs`                                                                                              | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A registered trade name under which the business operates, if different from its legal name.                   |                                                                                                                |
| `businessType`                                                                                                 | [components.BusinessType](../../models/components/businesstype.md)                                             | :heavy_minus_sign:                                                                                             | The type of entity represented by this business.                                                               | llc                                                                                                            |
| `address`                                                                                                      | [components.AddressUpdate](../../models/components/addressupdate.md)                                           | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `phone`                                                                                                        | [components.PhoneNumber](../../models/components/phonenumber.md)                                               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `email`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | jordan.lee@classbooker.dev                                                                                     |
| `website`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | Local fitness gym paying out instructors                                                                       |
| `taxID`                                                                                                        | [components.TaxIDUpdate](../../models/components/taxidupdate.md)                                               | :heavy_minus_sign:                                                                                             | An EIN (employer identification number) for the business. For sole proprietors, an SSN can be used as the EIN. |                                                                                                                |
| `industryCodes`                                                                                                | [components.IndustryCodesUpdate](../../models/components/industrycodesupdate.md)                               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `primaryRegulator`                                                                                             | [components.PrimaryRegulator](../../models/components/primaryregulator.md)                                     | :heavy_minus_sign:                                                                                             | If the business is a financial institution, this field describes its primary regulator.                        |                                                                                                                |