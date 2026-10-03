# TransferEventType

The event family.

## Example Usage

```typescript
import { TransferEventType } from "@moovio/sdk/models/components";

let value: TransferEventType = "push-to-card";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"transfer" | "authorization" | "capture" | "refund" | "cancellation" | "dispute" | "ach-credit" | "ach-debit" | "instant-bank-credit" | "wire-credit" | "card-payment" | "push-to-card" | "pull-from-card" | "wallet-credit" | "wallet-debit" | Unrecognized<string>
```