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
    representativeID: "3fd9d3dd-38ea-4a84-8f74-b95431a8300b",
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
    createdOn: new Date("2023-10-20T05:47:37.552Z"),
    updatedOn: new Date("2023-01-16T11:12:25.722Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.Representative](../../models/components/representative.md) | :heavy_check_mark:                                                     | N/A                                                                    |