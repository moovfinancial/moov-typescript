# IssuingControlsRestrictionMode

Whether the listed items are the only ones allowed (`allow`) or the ones to block (`block`).

## Example Usage

```typescript
import { IssuingControlsRestrictionMode } from "@moovio/sdk/models/components";

let value: IssuingControlsRestrictionMode = "allow";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"allow" | "block" | Unrecognized<string>
```