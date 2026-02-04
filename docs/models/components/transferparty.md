# TransferParty

## Example Usage

```typescript
import { TransferParty } from "@moovio/sdk/models/components";

let value: TransferParty = "destination";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"source" | "destination" | "partner" | Unrecognized<string>
```