# CreatePaymentLinkError

## Example Usage

```typescript
import { CreatePaymentLinkError } from "@moovio/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `partnerAccountID`                                                                   | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `merchantPaymentMethodID`                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `amount`                                                                             | [components.AmountValidationError](../../models/components/amountvalidationerror.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `maxUses`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `expiresOn`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `display`                                                                            | [components.DisplayOptionsError](../../models/components/displayoptionserror.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `payment`                                                                            | [components.PaymentDetailsError](../../models/components/paymentdetailserror.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `payout`                                                                             | [components.PayoutDetailsError](../../models/components/payoutdetailserror.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |