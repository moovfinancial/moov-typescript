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
      representativeID: "615fd366-c001-4a6d-847b-85282f82b1c7",
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
      createdOn: new Date("2023-02-10T18:47:56.756Z"),
      updatedOn: new Date("2025-12-24T17:48:53.086Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.Representative](../../models/components/representative.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |