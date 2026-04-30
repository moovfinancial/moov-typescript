# DomesticPullFromCard

Indicates if the card supports domestic pull-from-card transfer.

## Example Usage

```typescript
import { DomesticPullFromCard } from "@moovio/sdk/models/components";

let value: DomesticPullFromCard = "supported";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"not-supported" | "supported" | "unknown" | Unrecognized<string>
```