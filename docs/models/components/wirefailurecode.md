# WireFailureCode

Status codes for wire failures.

## Example Usage

```typescript
import { WireFailureCode } from "@moovio/sdk/models/components";

let value: WireFailureCode = "transaction-not-supported";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"processing-error" | "invalid-account" | "account-closed" | "account-blocked" | "invalid-field" | "transaction-not-supported" | "limit-exceeded" | "invalid-amount" | "other" | Unrecognized<string>
```