# MoovWalletPaymentMethod

## Example Usage

```typescript
import { MoovWalletPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletPaymentMethod = {
  paymentMethodID: "78fde42a-3931-47a1-b864-23e028a634ab",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "b638b103-6a08-4456-b761-276fc980a98c",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the payment method.                                                                                                  |
| `paymentMethodType`                                                                                                        | [components.MoovWalletPaymentMethodPaymentMethodType](../../models/components/moovwalletpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `wallet`                                                                                                                   | [components.PaymentMethodsWallet](../../models/components/paymentmethodswallet.md)                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |