# ListPaymentLinksRequest

## Example Usage

```typescript
import { ListPaymentLinksRequest } from "@moovio/sdk/models/operations";

let value: ListPaymentLinksRequest = {
  skip: 60,
  count: 20,
  accountID: "4120a5a5-2cd4-4117-b454-85dac93f27cd",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `skip`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 60                                                                           |
| `count`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 20                                                                           |
| `type`                                                                       | [components.PaymentLinkType](../../models/components/paymentlinktype.md)     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `status`                                                                     | [components.PaymentLinkStatus](../../models/components/paymentlinkstatus.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The merchant account ID.                                                     |                                                                              |