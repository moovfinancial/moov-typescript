# PaymentLinkPayoutDetails

## Example Usage

```typescript
import { PaymentLinkPayoutDetails } from "moov-sdk/models/components";

let value: PaymentLinkPayoutDetails = {
  allowedMethods: [
    "push-to-card",
  ],
  recipient: {
    email: "jordan.lee@classbooker.dev",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedMethods`                                                                                                                             | [components.DisbursementPaymentMethodType](../../models/components/disbursementpaymentmethodtype.md)[]                                       | :heavy_check_mark:                                                                                                                           | A list of payment methods that should be supported for this payment link.                                                                    |
| `recipient`                                                                                                                                  | [components.PayoutRecipient](../../models/components/payoutrecipient.md)                                                                     | :heavy_check_mark:                                                                                                                           | Specify the intended recipient of the payout.<br/><br/>This information will be used to authenticate the end user when they follow the payment link. |