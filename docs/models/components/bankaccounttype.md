# BankAccountType

The bank account type.

## Example Usage

```typescript
import { BankAccountType } from "@moovio/sdk/models/components";

let value: BankAccountType = "checking";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"checking" | "savings" | "general-ledger" | "loan" | Unrecognized<string>
```