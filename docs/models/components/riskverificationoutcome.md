# RiskVerificationOutcome

The outcome of a bank account risk-verification attempt.

## Example Usage

```typescript
import { RiskVerificationOutcome } from "@moovio/sdk/models/components";

let value: RiskVerificationOutcome = "notAttempted";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"notAttempted" | "success" | "inconclusive" | "decline" | Unrecognized<string>
```