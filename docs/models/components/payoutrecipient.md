# PayoutRecipient

Specify the intended recipient of the payout.

This information will be used to authenticate the end user when they follow the payment link.

## Example Usage

```typescript
import { PayoutRecipient } from "@moovio/sdk/models/components";

let value: PayoutRecipient = {
  email: "jordan.lee@classbooker.dev",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `email`                    | *string*                   | :heavy_check_mark:         | N/A                        | jordan.lee@classbooker.dev |