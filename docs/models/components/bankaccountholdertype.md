# BankAccountHolderType

The type of holder on a funding source.

## Example Usage

```typescript
import { BankAccountHolderType } from "@moovio/sdk/models/components";

let value: BankAccountHolderType = "business";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"individual" | "business" | "guest" | Unrecognized<string>
```