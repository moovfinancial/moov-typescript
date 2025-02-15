# UpdateRepresentativeResponse

## Example Usage

```typescript
import { UpdateRepresentativeResponse } from "@moovio/sdk/models/operations";

let value: UpdateRepresentativeResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    representativeID: "e5ae0d96-8db8-47e3-81ab-9449475833b6",
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
    createdOn: new Date("2025-07-29T19:53:24.866Z"),
    updatedOn: new Date("2024-03-16T06:19:45.604Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.Representative](../../models/components/representative.md) | :heavy_check_mark:                                                     | N/A                                                                    |