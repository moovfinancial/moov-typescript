# InstitutionsSearchResponse

## Example Usage

```typescript
import { InstitutionsSearchResponse } from "@moovio/sdk/models/components";

let value: InstitutionsSearchResponse = {
  ach: [
    {
      name: "First Citizens",
      routingNumber: "123456789",
      address: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      contact: {
        phone: {
          number: "8185551212",
          countryCode: "1",
        },
      },
    },
  ],
  rtp: [],
  wire: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `ach`                                                                      | [components.ACHInstitution](../../models/components/achinstitution.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `rtp`                                                                      | [components.RTPInstitution](../../models/components/rtpinstitution.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `wire`                                                                     | [components.WireInstitution](../../models/components/wireinstitution.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |