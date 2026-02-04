# CardBrand

The card brand.

## Example Usage

```typescript
import { CardBrand } from "@moovio/sdk/models/components";

let value: CardBrand = "Visa";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"American Express" | "Discover" | "Mastercard" | "Visa" | "Unknown" | Unrecognized<string>
```