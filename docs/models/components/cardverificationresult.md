# CardVerificationResult

The result of a card verification check.

## Example Usage

```typescript
import { CardVerificationResult } from "@moovio/sdk/models/components";

let value: CardVerificationResult = "match";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"noMatch" | "match" | "notChecked" | "unavailable" | "partialMatch" | Unrecognized<string>
```