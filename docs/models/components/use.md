# Use

The intended use of the key. 'sig' for signature, 'enc' for encryption.

## Example Usage

```typescript
import { Use } from "@moovio/sdk/models/components";

let value: Use = "sig";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sig" | "enc" | Unrecognized<string>
```