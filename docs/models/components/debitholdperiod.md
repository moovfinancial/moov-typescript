# DebitHoldPeriod

An optional override of your default ACH hold period in banking days. The hold period must be longer than or equal to your default setting.

## Example Usage

```typescript
import { DebitHoldPeriod } from "@moovio/sdk/models/components";

let value: DebitHoldPeriod = "2-days";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"no-hold" | "1-day" | "2-days" | Unrecognized<string>
```