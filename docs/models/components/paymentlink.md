# PaymentLink

## Example Usage

```typescript
import { PaymentLink } from "moov-sdk/models/components";

let value: PaymentLink = {
  code: "uc7ZYKrMhi",
  mode: "production",
  status: "disabled",
  partnerAccountID: "eb2725ee-459f-424d-b7e2-855765ebb49c",
  merchantAccountID: "5cb2d777-997d-4a66-ac53-0ee1521e0f1d",
  merchantPaymentMethodID: "55c5a87e-8db0-4c3e-a051-7d425d231b64",
  link: "https://shabby-singing.biz/",
  amount: {
    currency: "Rand",
    value: 162358,
  },
  uses: 290841,
  display: {
    title: "<value>",
    description: "questioningly blacken around separate",
    callToAction: "donate",
  },
  customer: {},
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
      "rtp-credit",
    ],
    recipient: {
      email: "jordan.lee@classbooker.dev",
    },
  },
  createdOn: new Date("2025-08-15T17:16:53.828Z"),
  updatedOn: new Date("2025-07-03T01:03:11.378Z"),
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Unique code identifying this payment link.                                                                        | uc7ZYKrMhi                                                                                                        |
| `mode`                                                                                                            | [components.Mode](../../models/components/mode.md)                                                                | :heavy_check_mark:                                                                                                | The operating mode for an account.                                                                                | production                                                                                                        |
| `status`                                                                                                          | [components.PaymentLinkStatus](../../models/components/paymentlinkstatus.md)                                      | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `partnerAccountID`                                                                                                | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The partner's Moov account ID.                                                                                    |                                                                                                                   |
| `merchantAccountID`                                                                                               | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The merchant's Moov account ID.                                                                                   |                                                                                                                   |
| `merchantPaymentMethodID`                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The merchant's preferred payment method ID. Must be a wallet payment method.                                      |                                                                                                                   |
| `link`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Link to the payment landing page for this payment link.                                                           |                                                                                                                   |
| `amount`                                                                                                          | [components.Amount](../../models/components/amount.md)                                                            | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `uses`                                                                                                            | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The number of times this payment link has been used.                                                              |                                                                                                                   |
| `maxUses`                                                                                                         | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | An optional limit on the number of times this payment link can be used. <br/><br/>**For payouts, `maxUses` is always 1.** |                                                                                                                   |
| `lastUsedOn`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | The timestamp when this payment link was last used.                                                               |                                                                                                                   |
| `expiresOn`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | An optional expiration date for this payment link.                                                                |                                                                                                                   |
| `display`                                                                                                         | [components.PaymentLinkDisplayOptions](../../models/components/paymentlinkdisplayoptions.md)                      | :heavy_check_mark:                                                                                                | Customizable display options for a payment link.                                                                  |                                                                                                                   |
| `customer`                                                                                                        | [components.PaymentLinkCustomerOptions](../../models/components/paymentlinkcustomeroptions.md)                    | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `payment`                                                                                                         | [components.PaymentLinkPaymentDetails](../../models/components/paymentlinkpaymentdetails.md)                      | :heavy_minus_sign:                                                                                                | Options for payment links used to collect payment.                                                                |                                                                                                                   |
| `payout`                                                                                                          | [components.PaymentLinkPayoutDetails](../../models/components/paymentlinkpayoutdetails.md)                        | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `createdOn`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `updatedOn`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `disabledOn`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |