# PayoutRecipientUpdate

Specify the intended recipient of the payout.

This information will be used to authenticate the end user when they follow the payment link.

## Example Usage

```typescript
import { PayoutRecipientUpdate } from "moov-sdk/models/components";

let value: PayoutRecipientUpdate = {
  email: "jordan.lee@classbooker.dev",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `email`                    | *string*                   | :heavy_minus_sign:         | N/A                        | jordan.lee@classbooker.dev |