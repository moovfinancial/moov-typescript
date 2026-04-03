# AccountType

The type of entity represented by this account.

## Example Usage

```typescript
import { AccountType } from "@moovio/sdk/models/components";

let value: AccountType = "business";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"individual" | "business" | "guest" | Unrecognized<string>
```