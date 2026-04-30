# CapabilityStatus

The status of the capability requested for an account.

## Example Usage

```typescript
import { CapabilityStatus } from "@moovio/sdk/models/components";

let value: CapabilityStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"enabled" | "disabled" | "pending" | "in-review" | Unrecognized<string>
```