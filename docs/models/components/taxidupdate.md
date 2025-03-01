# TaxIDUpdate

An EIN (employer identification number) for the business. For sole proprietors, an SSN can be used as the EIN.

## Example Usage

```typescript
import { TaxIDUpdate } from "@moovio/sdk/models/components";

let value: TaxIDUpdate = {
  ein: {
    number: "12-3456789",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `ein`                                            | [components.Ein](../../models/components/ein.md) | :heavy_minus_sign:                               | N/A                                              |