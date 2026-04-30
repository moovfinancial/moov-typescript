# CreateRepresentativeResponse

## Example Usage

```typescript
import { CreateRepresentativeResponse } from "@moovio/sdk/models/operations";

let value: CreateRepresentativeResponse = {
  headers: {},
  result: {
    representativeID: "<id>",
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
    createdOn: new Date("2025-12-21T17:22:40.206Z"),
    updatedOn: new Date("2026-02-15T00:56:15.037Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.Representative](../../models/components/representative.md) | :heavy_check_mark:                                                     | N/A                                                                    |