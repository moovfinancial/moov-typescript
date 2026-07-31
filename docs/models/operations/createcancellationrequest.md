# CreateCancellationRequest

## Example Usage

```typescript
import { CreateCancellationRequest } from "@moovio/sdk/models/operations";

let value: CreateCancellationRequest = {
  accountID: "<id>",
  transferID: "<id>",
  createCancellation: {
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | The partner's Moov account ID.                                                 |
| `transferID`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | The transfer ID to cancel.                                                     |
| `createCancellation`                                                           | [components.CreateCancellation](../../models/components/createcancellation.md) | :heavy_check_mark:                                                             | N/A                                                                            |