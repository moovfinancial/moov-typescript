# DomesticPullFromCard

Indicates if the card supports domestic pull-from-card transfer.

## Example Usage

```typescript
import { DomesticPullFromCard } from "@moovio/sdk/models/components";

let value: DomesticPullFromCard = "supported";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"not-supported" | "supported" | "unknown" | Unrecognized<string>
```