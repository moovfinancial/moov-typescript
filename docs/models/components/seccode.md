# SECCode

Code used to identify the ACH authorization method.

## Example Usage

```typescript
import { SECCode } from "@moovio/sdk/models/components";

let value: SECCode = "WEB";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"WEB" | "PPD" | "CCD" | "TEL" | Unrecognized<string>
```