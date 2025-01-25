# IssuingControls

## Example Usage

```typescript
import { IssuingControls } from "@moovio/sdk/models/components";

let value: IssuingControls = {
  velocityLimits: [
    {
      amount: 10000,
      interval: "per-transaction",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `singleUse`                                                                                  | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Indicates if the card is single-use. If true, the card closes after the first authorization. |
| `velocityLimits`                                                                             | [components.IssuingVelocityLimit](../../models/components/issuingvelocitylimit.md)[]         | :heavy_minus_sign:                                                                           | Sets the spending limit per time interval. Only one limit per interval is supported.         |