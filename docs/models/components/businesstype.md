# BusinessType

The type of entity represented by this business.

## Example Usage

```typescript
import { BusinessType } from "@moovio/sdk/models/components";

let value: BusinessType = "llc";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"soleProprietorship" | "unincorporatedAssociation" | "trust" | "publicCorporation" | "privateCorporation" | "llc" | "partnership" | "unincorporatedNonProfit" | "incorporatedNonProfit" | "governmentEntity" | Unrecognized<string>
```