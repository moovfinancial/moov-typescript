# PatchProfile

Describes the fields available when patching a profile.
Each object can be patched independent of patching the other fields.

## Example Usage

```typescript
import { PatchProfile } from "@moovio/sdk/models/components";

let value: PatchProfile = {
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
    birthDate: {
      day: 9,
      month: 11,
      year: 1989,
    },
  },
  business: {
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
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `individual`                                                             | [components.PatchIndividual](../../models/components/patchindividual.md) | :heavy_minus_sign:                                                       | Describes the fields available when patching an individual.              |
| `business`                                                               | [components.PatchBusiness](../../models/components/patchbusiness.md)     | :heavy_minus_sign:                                                       | N/A                                                                      |