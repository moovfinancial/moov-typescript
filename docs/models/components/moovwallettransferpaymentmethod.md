# MoovWalletTransferPaymentMethod

## Example Usage

```typescript
import { MoovWalletTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: MoovWalletTransferPaymentMethod = {
  paymentMethodID: "8b86744a-4586-494e-b644-1c26eba840b1",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "<id>",
    partnerAccountID: "13958078-06c5-489f-8acd-0aaf391c09eb",
    walletType: "default",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the payment method.                                                                          |
| `paymentMethodType`                                                                                | *"moov-wallet"*                                                                                    | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `wallet`                                                                                           | [components.TransferPaymentMethodsWallet](../../models/components/transferpaymentmethodswallet.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |