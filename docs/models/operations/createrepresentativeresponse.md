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
    representativeID: "72b6c905-cbaa-49a9-88c5-763505613335",
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
    createdOn: new Date("2025-03-12T17:24:42.086Z"),
    updatedOn: new Date("2024-01-11T13:11:35.931Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.Representative](../../models/components/representative.md) | :heavy_check_mark:                                                     | N/A                                                                    |