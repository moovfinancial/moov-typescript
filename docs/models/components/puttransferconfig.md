# PutTransferConfig

## Example Usage

```typescript
import { PutTransferConfig } from "@moovio/sdk/models/components";

let value: PutTransferConfig = {
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `tipPresets`                                                         | [components.PutTipPresets](../../models/components/puttippresets.md) | :heavy_check_mark:                                                   | N/A                                                                  |