# GuestProfile

Describes a guest account profile.

## Example Usage

```typescript
import { GuestProfile } from "@moovio/sdk/models/components";

let value: GuestProfile = {
  name: "Guest 75e5fbb8",
  phone: {
    number: "8185551212",
    countryCode: "1",
  },
  email: "jordan.lee@classbooker.dev",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The name associated with the guest account.<br/>This will default to "Guest {accountIDfirst8}" if no other name is provided. | Guest 75e5fbb8                                                                                                           |
| `phone`                                                                                                                  | [components.PhoneNumber](../../models/components/phonenumber.md)                                                         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `email`                                                                                                                  | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | jordan.lee@classbooker.dev                                                                                               |