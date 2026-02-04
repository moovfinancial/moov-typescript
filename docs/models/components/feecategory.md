# FeeCategory

## Example Usage

```typescript
import { FeeCategory } from "@moovio/sdk/models/components";

let value: FeeCategory = "monthly-platform";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ach" | "card-acquiring" | "card-other" | "card-pull" | "card-push" | "monthly-platform" | "network-passthrough" | "other" | "rtp" | Unrecognized<string>
```