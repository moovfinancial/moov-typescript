# BankAccountVerificationStatus

## Example Usage

```typescript
import { BankAccountVerificationStatus } from "@moovio/sdk/models/components";

let value: BankAccountVerificationStatus = "new";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"new" | "sent-credit" | "max-attempts-exceeded" | "failed" | "expired" | "successful" | Unrecognized<string>
```