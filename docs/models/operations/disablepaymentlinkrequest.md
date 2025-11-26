# DisablePaymentLinkRequest

## Example Usage

```typescript
import { DisablePaymentLinkRequest } from "@moovio/sdk/models/operations";

let value: DisablePaymentLinkRequest = {
  accountID: "901f8946-76e5-4e44-a922-a4bc47f6dcea",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `accountID`              | *string*                 | :heavy_check_mark:       | The merchant account ID. |                          |
| `paymentLinkCode`        | *string*                 | :heavy_check_mark:       | N/A                      | uc7ZYKrMhi               |