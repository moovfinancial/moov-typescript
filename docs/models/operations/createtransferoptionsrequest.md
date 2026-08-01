# CreateTransferOptionsRequest

## Example Usage

```typescript
import { CreateTransferOptionsRequest } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsRequest = {
  accountID: "<id>",
  createTransferOptions: {
    source: {},
    destination: {},
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The partner's Moov account ID.                                                       |
| `createTransferOptions`                                                              | [components.CreateTransferOptions](../../models/components/createtransferoptions.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |