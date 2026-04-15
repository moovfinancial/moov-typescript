# BankAccountStatus

## Example Usage

```typescript
import { BankAccountStatus } from "@moovio/sdk/models/components";

let value: BankAccountStatus = "verificationFailed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"new" | "verified" | "verificationFailed" | "pending" | "errored" | Unrecognized<string>
```