# CapabilityStatus

The status of the capability requested for an account.

## Example Usage

```typescript
import { CapabilityStatus } from "@moovio/sdk/models/components";

let value: CapabilityStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"enabled" | "disabled" | "pending" | "in-review" | Unrecognized<string>
```