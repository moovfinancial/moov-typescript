# UpdatePaymentLink

## Example Usage

```typescript
import { UpdatePaymentLink } from "@moovio/sdk/models/components";

let value: UpdatePaymentLink = {
  amount: {
    currency: "USD",
    value: 12099,
  },
  customer: {
    requireAddress: true,
    requirePhone: true,
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                              | [components.AmountUpdate](../../models/components/amountupdate.md)                                                                                    | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `expiresOn`                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                         | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `display`                                                                                                                                             | [components.PaymentLinkDisplayOptionsUpdate](../../models/components/paymentlinkdisplayoptionsupdate.md)                                              | :heavy_minus_sign:                                                                                                                                    | Customizable display options for a payment link.                                                                                                      |
| `customer`                                                                                                                                            | [components.PaymentLinkCustomerOptions](../../models/components/paymentlinkcustomeroptions.md)                                                        | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `payment`                                                                                                                                             | [components.PaymentLinkPaymentDetailsUpdate](../../models/components/paymentlinkpaymentdetailsupdate.md)                                              | :heavy_minus_sign:                                                                                                                                    | Options for payment links used to collect payment.                                                                                                    |
| `payout`                                                                                                                                              | [components.PaymentLinkPayoutDetailsUpdate](../../models/components/paymentlinkpayoutdetailsupdate.md)                                                | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `lineItems`                                                                                                                                           | [components.CreatePaymentLinkLineItemsUpdate](../../models/components/createpaymentlinklineitemsupdate.md)                                            | :heavy_minus_sign:                                                                                                                                    | An optional collection of line items for a payment link.<br/>When line items are provided, their total plus sales tax must equal the payment link amount. |