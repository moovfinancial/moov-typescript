# PaymentLinkPayoutDetailsUpdate

## Example Usage

```typescript
import { PaymentLinkPayoutDetailsUpdate } from "@moovio/sdk/models/components";

let value: PaymentLinkPayoutDetailsUpdate = {
  recipient: {
    email: "jordan.lee@classbooker.dev",
    phone: {
      number: "8185551212",
      countryCode: "1",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedMethods`                                                                                                                                                                                        | [components.DisbursementPaymentMethodType](../../models/components/disbursementpaymentmethodtype.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                      | A list of payment methods that should be supported for this payment link.                                                                                                                               |
| `recipient`                                                                                                                                                                                             | [components.PayoutRecipient](../../models/components/payoutrecipient.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | Specify the intended recipient of the payout.<br/>Either `email` or `phone` must be specified, but not both.<br/><br/>This information will be used to authenticate the end user when they follow the payment link. |