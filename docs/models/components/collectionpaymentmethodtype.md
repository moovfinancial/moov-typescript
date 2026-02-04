# CollectionPaymentMethodType

Payment methods allowed for collecting a payment.

## Example Usage

```typescript
import { CollectionPaymentMethodType } from "@moovio/sdk/models/components";

let value: CollectionPaymentMethodType = "card-payment";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"apple-pay" | "card-payment" | "ach-debit-collect" | Unrecognized<string>
```