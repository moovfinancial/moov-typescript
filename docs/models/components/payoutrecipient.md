# PayoutRecipient

Specify the intended recipient of the payout.
Either `email` or `phone` must be specified, but not both.

This information will be used to authenticate the end user when they follow the payment link.

## Example Usage

```typescript
import { PayoutRecipient } from "@moovio/sdk/models/components";

let value: PayoutRecipient = {
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
| `email`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | jordan.lee@classbooker.dev                                       |
| `phone`                                                          | [components.PhoneNumber](../../models/components/phonenumber.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |