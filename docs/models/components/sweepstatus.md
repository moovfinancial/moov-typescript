# SweepStatus

## Example Usage

```typescript
import { SweepStatus } from "@moovio/sdk/models/components";

let value: SweepStatus = "action-required";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accruing" | "action-required" | "canceled" | "closed" | "failed" | "paid" | Unrecognized<string>
```