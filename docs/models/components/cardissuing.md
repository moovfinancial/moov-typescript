# CardIssuing

Underwriting data for the `card-issuing` capability.

Issued cards are funded from the account's card-issuing wallet before they can be spent, so estimated activity is the only data collected.

## Example Usage

```typescript
import { CardIssuing } from "@moovio/sdk/models/components";

let value: CardIssuing = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `estimatedActivity`                                                          | [components.EstimatedActivity](../../models/components/estimatedactivity.md) | :heavy_minus_sign:                                                           | N/A                                                                          |