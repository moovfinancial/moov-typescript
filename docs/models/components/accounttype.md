# AccountType

The type of entity represented by this account.

## Example Usage

```typescript
import { AccountType } from "@moovio/sdk/models/components";

let value: AccountType = "business";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"individual" | "business" | "guest" | Unrecognized<string>
```