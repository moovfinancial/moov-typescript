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
      representativeID: "636afa86-1729-4bf4-862e-dc0831c38837",
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
      createdOn: new Date("2023-01-01T01:54:20.575Z"),
      updatedOn: new Date("2025-08-22T19:59:17.126Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.Representative](../../models/components/representative.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |