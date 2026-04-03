# InstantBankFailureCode

Status codes for instant-bank failures.

## Example Usage

```typescript
import { InstantBankFailureCode } from "@moovio/sdk/models/components";

let value: InstantBankFailureCode = "account-closed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"processing-error" | "invalid-account" | "account-closed" | "account-blocked" | "invalid-field" | "transaction-not-supported" | "limit-exceeded" | "invalid-amount" | "customer-deceased" | "participant-not-available" | "other" | Unrecognized<string>
```