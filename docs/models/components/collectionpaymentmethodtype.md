# CollectionPaymentMethodType

Payment methods allowed for collecting a payment.

## Example Usage

```typescript
import { CollectionPaymentMethodType } from "@moovio/sdk/models/components";

let value: CollectionPaymentMethodType = "card-payment";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"apple-pay" | "card-payment" | "ach-debit-collect" | "google-pay" | Unrecognized<string>
```