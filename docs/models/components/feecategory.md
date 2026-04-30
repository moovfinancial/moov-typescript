# FeeCategory

## Example Usage

```typescript
import { FeeCategory } from "@moovio/sdk/models/components";

let value: FeeCategory = "monthly-platform";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ach" | "card-acquiring" | "card-other" | "card-pull" | "card-push" | "instant-bank" | "monthly-platform" | "network-passthrough" | "other" | "rtp" | Unrecognized<string>
```