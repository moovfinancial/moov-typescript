# UpdatePaymentLinkRequest

## Example Usage

```typescript
import { UpdatePaymentLinkRequest } from "moov-sdk/models/operations";

let value: UpdatePaymentLinkRequest = {
  accountID: "8c03f714-09f9-4953-b8e0-969d736216a4",
  paymentLinkCode: "uc7ZYKrMhi",
  updatePaymentLink: {
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
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `xMoovVersion`                                                               | [components.Versions](../../models/components/versions.md)                   | :heavy_minus_sign:                                                           | Specify an API version.                                                      |                                                                              |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `paymentLinkCode`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | uc7ZYKrMhi                                                                   |
| `updatePaymentLink`                                                          | [components.UpdatePaymentLink](../../models/components/updatepaymentlink.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |