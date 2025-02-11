# CreateRepresentativeResponse

## Example Usage

```typescript
import { CreateRepresentativeResponse } from "@moovio/sdk/models/operations";

let value: CreateRepresentativeResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    representativeID: "764149c8-c29e-433b-8c35-a697cdd99704",
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
    createdOn: new Date("2024-04-24T19:30:11.470Z"),
    updatedOn: new Date("2025-07-20T00:51:35.962Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.Representative](../../models/components/representative.md) | :heavy_check_mark:                                                     | N/A                                                                    |