<!-- Start SDK Example Usage [usage] -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.accounts.create({
    accountType: "business",
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
      },
    },
    metadata: {
      "optional": "metadata",
    },
    termsOfService: {
      token:
        "kgT1uxoMAk7QKuyJcmQE8nqW_HjpyuXBabiXPi6T83fUQoxsyWYPcYzuHQTqrt7YRp4gCwyDQvb6U5REM9Pgl2EloCe35t-eiMAbUWGo3Kerxme6aqNcKrP_6-v0MTXViOEJ96IBxPFTvMV7EROI2dq3u4e-x4BbGSCedAX-ViAQND6hcreCDXwrO6sHuzh5Xi2IzSqZHxaovnWEboaxuZKRJkA3dsFID6fzitMpm2qrOh4",
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
    settings: {
      cardPayment: {
        statementDescriptor: "Whole Body Fitness",
      },
      achPayment: {
        companyName: "WholeBodyFitness",
      },
    },
    mode: "production",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->