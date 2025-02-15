# ListRepresentativesResponse

## Example Usage

```typescript
import { ListRepresentativesResponse } from "@moovio/sdk/models/operations";

let value: ListRepresentativesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      representativeID: "970417d9-a342-4d48-a215-5595c15a9174",
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
      createdOn: new Date("2023-05-23T08:06:28.202Z"),
      updatedOn: new Date("2025-01-04T22:33:57.738Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.Representative](../../models/components/representative.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |