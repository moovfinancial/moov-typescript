# FulfillmentTimeframe

## Example Usage

```typescript
import { FulfillmentTimeframe } from "@moovio/sdk/models/components";

let value: FulfillmentTimeframe = "immediate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"immediate" | "other" | "over-30-days" | "pre-order" | "recurring-schedule" | "scheduled-event" | "within-30-days" | "within-7-days" | Unrecognized<string>
```