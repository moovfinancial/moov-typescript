# ResolutionLinkRecipient

Contact information for the recipient of a resolution link. Provide either `email` or `phone`, but not both.

## Example Usage

```typescript
import { ResolutionLinkRecipient } from "@moovio/sdk/models/components";

let value: ResolutionLinkRecipient = {
  email: "jordan.lee@classbooker.dev",
  phone: {
    number: "8185551212",
    countryCode: "1",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `email`                                                          | *string*                                                         | :heavy_minus_sign:                                               | The email address of the recipient.                              | jordan.lee@classbooker.dev                                       |
| `phone`                                                          | [components.PhoneNumber](../../models/components/phonenumber.md) | :heavy_minus_sign:                                               | The phone number of the recipient.                               |                                                                  |