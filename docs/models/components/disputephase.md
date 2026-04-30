# DisputePhase

The phase of a dispute within the dispute lifecycle.

## Example Usage

```typescript
import { DisputePhase } from "@moovio/sdk/models/components";

let value: DisputePhase = "inquiry";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pre-dispute" | "inquiry" | "chargeback" | "unknown" | Unrecognized<string>
```