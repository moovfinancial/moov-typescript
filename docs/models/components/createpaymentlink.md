# CreatePaymentLink

Request to create a new payment link.

A payment link must include either `payment` or `payout` details, but not both. For payout payment links,
`maxUses` will automatically be set to 1, as these are intended for a one-time disbursement
to a specific recipient.

**Note:** The `payout` option is currently under development and is not yet available for general use.

## Example Usage

```typescript
import { CreatePaymentLink } from "@moovio/sdk/models/components";

let value: CreatePaymentLink = {
  partnerAccountID: "d290f1ee-6c54-4b01-90e6-d701748f0851",
  merchantPaymentMethodID: "4c4e7f8e-81f4-4f3d-8f6f-6f6e7f8e4c4e",
  amount: {
    currency: "USD",
    value: 10000,
  },
  display: {
    title: "Example Payment Link",
    description: "This is an example payment link.",
    callToAction: "pay",
  },
  customer: {
    requirePhone: true,
  },
  payment: {
    allowedMethods: [
      "card-payment",
      "ach-debit-collect",
    ],
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `partnerAccountID`                                                                                                | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The partner's Moov account ID.                                                                                    |
| `merchantPaymentMethodID`                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The merchant's preferred payment method ID. Must be a wallet payment method.                                      |
| `amount`                                                                                                          | [components.Amount](../../models/components/amount.md)                                                            | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `maxUses`                                                                                                         | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An optional limit on the number of times this payment link can be used. <br/><br/>**For payouts, `maxUses` is always 1.** |
| `expiresOn`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | An optional expiration date for this payment link.                                                                |
| `display`                                                                                                         | [components.PaymentLinkDisplayOptions](../../models/components/paymentlinkdisplayoptions.md)                      | :heavy_check_mark:                                                                                                | Customizable display options for a payment link.                                                                  |
| `customer`                                                                                                        | [components.PaymentLinkCustomerOptions](../../models/components/paymentlinkcustomeroptions.md)                    | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `payment`                                                                                                         | [components.PaymentLinkPaymentDetails](../../models/components/paymentlinkpaymentdetails.md)                      | :heavy_minus_sign:                                                                                                | Options for payment links used to collect payment.                                                                |
| `payout`                                                                                                          | [components.PaymentLinkPayoutDetails](../../models/components/paymentlinkpayoutdetails.md)                        | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |