# CustomerSupportUpdate

User-provided information that can be displayed on credit card transactions for customers to use when
contacting a customer support team. This data is only allowed on a business account.

## Example Usage

```typescript
import { CustomerSupportUpdate } from "@moovio/sdk/models/components";

let value: CustomerSupportUpdate = {
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `phone`                                                              | [components.PhoneNumber](../../models/components/phonenumber.md)     | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `email`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | jordan.lee@classbooker.dev                                           |
| `address`                                                            | [components.AddressUpdate](../../models/components/addressupdate.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `website`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |