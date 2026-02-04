# FulfillmentMethod

## Example Usage

```typescript
import { FulfillmentMethod } from "@moovio/sdk/models/components";

let value: FulfillmentMethod = "digital-content";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bill-or-debt-payment" | "digital-content" | "donation" | "in-person-service" | "local-pickup-or-delivery" | "other" | "remote-service" | "shipped-physical-goods" | "subscription-or-membership" | Unrecognized<string>
```