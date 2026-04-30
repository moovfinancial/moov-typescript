# CreateTransferConfigResponse

## Example Usage

```typescript
import { CreateTransferConfigResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferConfigResponse = {
  headers: {},
  result: {
    tipPresets: {
      fixedAmountOptions: [
        {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.TransferConfig](../../models/components/transferconfig.md) | :heavy_check_mark:                                                     | N/A                                                                    |