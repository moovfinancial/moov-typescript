# PendingLitigation

## Example Usage

```typescript
import { PendingLitigation } from "@moovio/sdk/models/components";

let value: PendingLitigation = "fraud-or-financial-crime";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bankruptcy-or-insolvency" | "consumer-protection-or-class-action" | "data-breach-or-privacy" | "employment-or-workplace-disputes" | "fraud-or-financial-crime" | "government-enforcement-or-investigation" | "intellectual-property" | "none" | "other" | "personal-injury-or-medical" | Unrecognized<string>
```