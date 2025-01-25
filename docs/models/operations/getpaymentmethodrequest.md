# GetPaymentMethodRequest

## Example Usage

```typescript
import { GetPaymentMethodRequest } from "@moovio/sdk/models/operations";

let value: GetPaymentMethodRequest = {
  accountID: "db7efe4d-51bc-4f74-9169-725e78760379",
  paymentMethodID: "5cbf0b04-eca6-4047-8670-a70f32c59060",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `paymentMethodID`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |