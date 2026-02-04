# EvidenceType

## Example Usage

```typescript
import { EvidenceType } from "@moovio/sdk/models/components";

let value: EvidenceType = "receipt";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"receipt" | "proof-of-delivery" | "cancelation-policy" | "terms-of-service" | "customer-communication" | "generic-evidence" | "cover-letter" | "other" | Unrecognized<string>
```