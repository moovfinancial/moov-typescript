# CardVerificationResult

## Example Usage

```typescript
import { CardVerificationResult } from "@moovio/sdk/models/components";

let value: CardVerificationResult = "match";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"noMatch" | "match" | "notChecked" | "unavailable" | "partialMatch" | Unrecognized<string>
```