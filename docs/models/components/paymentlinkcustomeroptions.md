# PaymentLinkCustomerOptions

## Example Usage

```typescript
import { PaymentLinkCustomerOptions } from "@moovio/sdk/models/components";

let value: PaymentLinkCustomerOptions = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `requireAddress`                                                                    | *boolean*                                                                           | :heavy_minus_sign:                                                                  | If true, a billing address is required when completing the payment form.            |
| `requirePhone`                                                                      | *boolean*                                                                           | :heavy_minus_sign:                                                                  | If true, a phone number is required when completing the payment form.               |
| `metadata`                                                                          | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | Optional free-form metadata for the Moov account that will represent this customer. |