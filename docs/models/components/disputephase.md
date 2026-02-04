# DisputePhase

The phase of a dispute within the dispute lifecycle.

## Example Usage

```typescript
import { DisputePhase } from "@moovio/sdk/models/components";

let value: DisputePhase = "inquiry";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pre-dispute" | "inquiry" | "chargeback" | "unknown" | Unrecognized<string>
```