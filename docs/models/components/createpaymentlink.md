# CreatePaymentLink

Request to create a new payment link.

A payment link must include either `payment` or `payout` details, but not both. For payout payment links,
`maxUses` will automatically be set to 1, as these are intended for a one-time disbursement
to a specific recipient.

**Note:** The `payout` option is currently under development and is not yet available for general use.

## Example Usage

```typescript
import { CreatePaymentLink } from "moov-sdk/models/components";

let value: CreatePaymentLink = {
  partnerAccountID: "cd72f271-ffb5-4442-b825-ab06ad7f4074",
  merchantPaymentMethodID: "34cb8b60-0810-4fd2-a0f4-2b14fa86c2fd",
  amount: {
    currency: "Argentine Peso",
    value: 700856,
  },
  display: {
    title: "<value>",
    description:
      "solidly doing lightly inside carpool yuck mmm canter bah before",
    callToAction: "donate",
  },
  payment: {
    allowedMethods: [
      "ach-debit-collect",
    ],
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
    achDetails: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
    },
  },
  payout: {
    allowedMethods: [
      "push-to-card",
    ],
    recipient: {
      email: "jordan.lee@classbooker.dev",
    },
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