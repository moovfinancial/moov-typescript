# BusinessType

The type of entity represented by this business.

## Example Usage

```typescript
import { BusinessType } from "@moovio/sdk/models/components";

let value: BusinessType = "llc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"soleProprietorship" | "unincorporatedAssociation" | "trust" | "publicCorporation" | "privateCorporation" | "llc" | "partnership" | "unincorporatedNonProfit" | "incorporatedNonProfit" | "governmentEntity" | Unrecognized<string>
```