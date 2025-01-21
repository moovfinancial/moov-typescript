# GetPaymentMethodRequest

## Example Usage

```typescript
import { GetPaymentMethodRequest } from "moov-sdk/models/operations";

let value: GetPaymentMethodRequest = {
  accountID: "bad6e12a-42e1-4fdd-aa3c-097c06726e74",
  paymentMethodID: "04ca093f-c267-42bd-a024-f621ec98c5ab",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `paymentMethodID`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |