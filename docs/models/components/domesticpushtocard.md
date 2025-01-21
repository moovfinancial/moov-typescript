# DomesticPushToCard

Indicates which level of domestic push-to-card transfer is supported by the card, if any.

## Example Usage

```typescript
import { DomesticPushToCard } from "moov-sdk/models/components";

let value: DomesticPushToCard = "standard";
```

## Values

```typescript
"not-supported" | "standard" | "fast-funds" | "unknown"
```