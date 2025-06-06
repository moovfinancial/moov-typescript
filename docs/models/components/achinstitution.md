# ACHInstitution

## Example Usage

```typescript
import { ACHInstitution } from "@moovio/sdk/models/components";

let value: ACHInstitution = {
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | Name of the financial institution.                       | First Citizens                                           |
| `routingNumber`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | 123456789                                                |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `contact`                                                | [components.Contact](../../models/components/contact.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |