# TransferConfig

Configurable options for a transfer.

## Example Usage

```typescript
import { TransferConfig } from "@moovio/sdk/models/components";

let value: TransferConfig = {
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `tipPresets`                                                   | [components.TipPresets](../../models/components/tippresets.md) | :heavy_minus_sign:                                             | Tip presets when calculating tips for a transfer.              |