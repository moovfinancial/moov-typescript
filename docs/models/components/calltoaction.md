# CallToAction

The text to be displayed on web form's submit button.

If set to "auto" the UI will automatically select between 
"pay" and "confirm" for payments and payouts respectively.

## Example Usage

```typescript
import { CallToAction } from "@moovio/sdk/models/components";

let value: CallToAction = "book";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pay" | "book" | "subscribe" | "donate" | "confirm" | "auto" | Unrecognized<string>
```