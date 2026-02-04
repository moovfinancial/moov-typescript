# Mode

The operating mode for an account.

## Example Usage

```typescript
import { Mode } from "@moovio/sdk/models/components";

let value: Mode = "production";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sandbox" | "production" | Unrecognized<string>
```