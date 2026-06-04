# TransferControls

Controls for transfers created through a given partner

## Example Usage

```typescript
import { TransferControls } from "@moovio/sdk/models/components";

let value: TransferControls = {
  accountID: "<id>",
  partnerAccountID: "<id>",
  debtRepayment: false,
  allowDynamicDescriptor: true,
  allowSurcharge: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | ID of the merchant account.                                                  |
| `partnerAccountID`                                                           | *string*                                                                     | :heavy_check_mark:                                                           | ID of the partner account.                                                   |
| `debtRepayment`                                                              | *boolean*                                                                    | :heavy_check_mark:                                                           | Indicates if the account is configured for debt repayment.                   |
| `allowDynamicDescriptor`                                                     | *boolean*                                                                    | :heavy_check_mark:                                                           | Indicates if the account is allowed to set dynamic descriptors on transfers. |
| `allowSurcharge`                                                             | *boolean*                                                                    | :heavy_check_mark:                                                           | Indicates if the account is allowed to apply surcharges to transfers.        |