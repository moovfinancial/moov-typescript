# PaymentDetailsError

## Example Usage

```typescript
import { PaymentDetailsError } from "moov-sdk/models/components";

let value: PaymentDetailsError = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `allowedMethods`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `cardDetails`                                                                            | [components.CardPaymentDetailsError](../../models/components/cardpaymentdetailserror.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `achDetails`                                                                             | [components.ACHPaymentDetailsError](../../models/components/achpaymentdetailserror.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |