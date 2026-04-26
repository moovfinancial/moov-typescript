# UpdateTransferConfigResponse

## Example Usage

```typescript
import { UpdateTransferConfigResponse } from "@moovio/sdk/models/operations";

let value: UpdateTransferConfigResponse = {
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