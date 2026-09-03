# TransferType

The rail and direction used to move funds for a transfer.

## Example Usage

```typescript
import { TransferType } from "@moovio/sdk/models/components";

let value: TransferType = "push-to-card";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"card-payment" | "push-to-card" | "pull-from-card" | "ach-debit" | "ach-credit" | "ach-debit-to-ach-credit" | "instant-bank-credit" | "wallet" | "wire-credit" | Unrecognized<string>
```