# BusinessPresence

## Example Usage

```typescript
import { BusinessPresence } from "@moovio/sdk/models/components";

let value: BusinessPresence = "retail-storefront";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"commercial-office" | "home-based" | "mixed-presence" | "mobile-business" | "online-only" | "retail-storefront" | Unrecognized<string>
```