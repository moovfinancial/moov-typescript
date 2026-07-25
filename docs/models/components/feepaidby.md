# FeePaidBy

Indicates which party to a money movement bears an incurred fee.

## Example Usage

```typescript
import { FeePaidBy } from "@moovio/sdk/models/components";

let value: FeePaidBy = "source";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"source" | "destination" | Unrecognized<string>
```