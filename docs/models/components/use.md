# Use

The intended use of the key. 'sig' for signature, 'enc' for encryption.

## Example Usage

```typescript
import { Use } from "@moovio/sdk/models/components";

let value: Use = "sig";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sig" | "enc" | Unrecognized<string>
```