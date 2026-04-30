# IssuingControlsError

## Example Usage

```typescript
import { IssuingControlsError } from "@moovio/sdk/models/components";

let value: IssuingControlsError = {
  velocityLimits: {
    "0": {
      amount: "must be no less than 1",
      interval: "must be a valid value",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `velocityLimits`                                                                                             | Record<string, [components.IssuingVelocityLimitError](../../models/components/issuingvelocitylimiterror.md)> | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |