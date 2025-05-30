# PatchAccount

Describes the fields available when patching a Moov account.

## Example Usage

```typescript
import { PatchAccount } from "@moovio/sdk/models/components";

let value: PatchAccount = {
  profile: {
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
  },
  metadata: {
    "optional": "metadata",
  },
  termsOfService: {
    acceptedIP: "172.217.2.46",
    acceptedUserAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36",
  },
  customerSupport: {
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
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `profile`                                                                                                                    | [components.PatchProfile](../../models/components/patchprofile.md)                                                           | :heavy_minus_sign:                                                                                                           | Describes the fields available when patching a profile.<br/>Each object can be patched independent of patching the other fields. |                                                                                                                              |
| `metadata`                                                                                                                   | Record<string, *string*>                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | {<br/>"optional": "metadata"<br/>}                                                                                           |
| `termsOfService`                                                                                                             | *components.PatchAccountTermsOfService*                                                                                      | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `foreignID`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `customerSupport`                                                                                                            | [components.PatchAccountCustomerSupport](../../models/components/patchaccountcustomersupport.md)                             | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `settings`                                                                                                                   | [components.CreateAccountSettings](../../models/components/createaccountsettings.md)                                         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |