# DomesticPushToCard

Indicates which level of domestic push-to-card transfer is supported by the card, if any.

## Example Usage

```typescript
import { DomesticPushToCard } from "@moovio/sdk/models/components";

let value: DomesticPushToCard = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"not-supported" | "standard" | "fast-funds" | "unknown" | Unrecognized<string>
```