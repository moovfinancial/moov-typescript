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
      representativeID: "f3d5fde9-438a-4b28-8638-483e591a4f69",
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
      createdOn: new Date("2025-08-02T04:16:12.146Z"),
      updatedOn: new Date("2025-05-31T13:10:23.082Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.Representative](../../models/components/representative.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |