# AuthMethod

The authentication method used for the Google Pay token.

## Example Usage

```typescript
import { AuthMethod } from "@moovio/sdk/models/components";

let value: AuthMethod = "PAN_ONLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PAN_ONLY" | "CRYPTOGRAM_3DS" | Unrecognized<string>
```