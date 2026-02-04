# BankAccountVerificationMethod

## Example Usage

```typescript
import { BankAccountVerificationMethod } from "@moovio/sdk/models/components";

let value: BankAccountVerificationMethod = "ach";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"instant" | "ach" | Unrecognized<string>
```