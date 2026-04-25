# CreateTransferConfig

## Example Usage

```typescript
import { CreateTransferConfig } from "@moovio/sdk/models/components";

let value: CreateTransferConfig = {
  tipPresets: {
    fixedAmountOptions: [
      {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `tipPresets`                                                               | [components.CreateTipPresets](../../models/components/createtippresets.md) | :heavy_minus_sign:                                                         | N/A                                                                        |