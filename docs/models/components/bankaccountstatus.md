# BankAccountStatus

## Example Usage

```typescript
import { BankAccountStatus } from "@moovio/sdk/models/components";

let value: BankAccountStatus = "verificationFailed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"new" | "verified" | "verificationFailed" | "pending" | "errored" | Unrecognized<string>
```