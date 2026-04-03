# DomesticPushToCard

Indicates which level of domestic push-to-card transfer is supported by the card, if any.

## Example Usage

```typescript
import { DomesticPushToCard } from "@moovio/sdk/models/components";

let value: DomesticPushToCard = "standard";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"not-supported" | "standard" | "fast-funds" | "unknown" | Unrecognized<string>
```