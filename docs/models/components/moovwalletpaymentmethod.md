# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "e040db4c-aac2-4985-bb67-3b0784251b90",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "cfafc4c1-8e8f-4689-bfb9-1318fd780d60",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the payment method.                                                                                                  |
| `paymentMethodType`                                                                                                        | [components.MoovWalletPaymentMethodPaymentMethodType](../../models/components/moovwalletpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `wallet`                                                                                                                   | [components.PaymentMethodsWallet](../../models/components/paymentmethodswallet.md)                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |