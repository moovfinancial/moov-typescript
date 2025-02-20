# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "7e9a6a69-8411-4917-9e9f-4ae58d50f61b",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "21bf6ca6-060f-469f-b92f-3256f8cc611f",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the payment method.                                                                                                  |
| `paymentMethodType`                                                                                                        | [components.MoovWalletPaymentMethodPaymentMethodType](../../models/components/moovwalletpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `wallet`                                                                                                                   | [components.PaymentMethodsWallet](../../models/components/paymentmethodswallet.md)                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |