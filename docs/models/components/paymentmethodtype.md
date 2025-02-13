# PaymentMethodType

The payment method type that represents a payment rail and directionality

## Example Usage

```typescript
import { PaymentMethodType } from "@moovio/sdk/models/components";

let value: PaymentMethodType = "pull-from-card";
```

## Values

```typescript
"moov-wallet" | "ach-debit-fund" | "ach-debit-collect" | "ach-credit-standard" | "ach-credit-same-day" | "rtp-credit" | "card-payment" | "push-to-card" | "pull-from-card" | "apple-pay"
```