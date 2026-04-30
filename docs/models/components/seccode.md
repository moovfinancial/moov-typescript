# SECCode

Code used to identify the ACH authorization method.

## Example Usage

```typescript
import { SECCode } from "@moovio/sdk/models/components";

let value: SECCode = "WEB";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"WEB" | "PPD" | "CCD" | "TEL" | Unrecognized<string>
```