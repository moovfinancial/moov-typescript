# UpdatePaymentLink

## Example Usage

```typescript
import { UpdatePaymentLink } from "moov-sdk/models/components";

let value: UpdatePaymentLink = {
  payment: {
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
    achDetails: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
    },
  },
  payout: {
    recipient: {
      email: "jordan.lee@classbooker.dev",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                 | [components.AmountUpdate](../../models/components/amountupdate.md)                                       | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `expiresOn`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `display`                                                                                                | [components.PaymentLinkDisplayOptionsUpdate](../../models/components/paymentlinkdisplayoptionsupdate.md) | :heavy_minus_sign:                                                                                       | Customizable display options for a payment link.                                                         |
| `customer`                                                                                               | [components.PaymentLinkCustomerOptions](../../models/components/paymentlinkcustomeroptions.md)           | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `payment`                                                                                                | [components.PaymentLinkPaymentDetailsUpdate](../../models/components/paymentlinkpaymentdetailsupdate.md) | :heavy_minus_sign:                                                                                       | Options for payment links used to collect payment.                                                       |
| `payout`                                                                                                 | [components.PaymentLinkPayoutDetailsUpdate](../../models/components/paymentlinkpayoutdetailsupdate.md)   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |