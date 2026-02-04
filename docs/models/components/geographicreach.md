# GeographicReach

## Example Usage

```typescript
import { GeographicReach } from "@moovio/sdk/models/components";

let value: GeographicReach = "international-only";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"international-only" | "us-and-international" | "us-only" | Unrecognized<string>
```