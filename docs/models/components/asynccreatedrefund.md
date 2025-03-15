# AsyncCreatedRefund

Asynchronous refund response

## Example Usage

```typescript
import { AsyncCreatedRefund } from "@moovio/sdk/models/components";

let value: AsyncCreatedRefund = {
  refundID: "34dd5ffb-3371-4e65-b7ee-48608ccb3120",
  createdOn: new Date("2023-08-13T04:54:32.640Z"),
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `refundID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.Amount](../../models/components/amount.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |