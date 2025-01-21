# CreatePaymentLinkRequest

## Example Usage

```typescript
import { CreatePaymentLinkRequest } from "moov-sdk/models/operations";

let value: CreatePaymentLinkRequest = {
  accountID: "76d87938-51c5-4400-845b-5c9520665c11",
  createPaymentLink: {
    partnerAccountID: "8be4284f-03c6-48da-89a1-195fde290b0a",
    merchantPaymentMethodID: "940a7b08-02c3-4122-9d9c-4ae8d3f1c318",
    amount: {
      currency: "Djibouti Franc",
      value: 439123,
    },
    display: {
      title: "<value>",
      description:
        "phew about helpless astride breed essential huzzah oxygenate productive behold",
      callToAction: "subscribe",
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
        "ach-credit-same-day",
      ],
      recipient: {
        email: "jordan.lee@classbooker.dev",
      },
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `xMoovVersion`                                                               | [components.Versions](../../models/components/versions.md)                   | :heavy_minus_sign:                                                           | Specify an API version.                                                      |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createPaymentLink`                                                          | [components.CreatePaymentLink](../../models/components/createpaymentlink.md) | :heavy_check_mark:                                                           | N/A                                                                          |