# UpdateAccountRequest

## Example Usage

```typescript
import { UpdateAccountRequest } from "@moovio/sdk/models/operations";

let value: UpdateAccountRequest = {
  accountID: "4457cf66-6d83-40da-9fdc-8220083794c3",
  patchAccount: {
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
        industry: "electronics-appliances",
      },
    },
    metadata: {
      "optional": "metadata",
    },
    termsOfService: {
      token: {
        token:
          "kgT1uxoMAk7QKuyJcmQE8nqW_HjpyuXBabiXPi6T83fUQoxsyWYPcYzuHQTqrt7YRp4gCwyDQvb6U5REM9Pgl2EloCe35t-eiMAbUWGo3Kerxme6aqNcKrP_6-v0MTXViOEJ96IBxPFTvMV7EROI2dq3u4e-x4BbGSCedAX-ViAQND6hcreCDXwrO6sHuzh5Xi2IzSqZHxaovnWEboaxuZKRJkA3dsFID6fzitMpm2qrOh4",
      },
      manual: {
        acceptedIP: "172.217.2.46",
        acceptedUserAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36",
      },
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
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `patchAccount`                                                     | [components.PatchAccount](../../models/components/patchaccount.md) | :heavy_check_mark:                                                 | N/A                                                                |