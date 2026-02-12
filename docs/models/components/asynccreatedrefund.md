# AsyncCreatedRefund

Asynchronous refund response

## Example Usage

```typescript
import { AsyncCreatedRefund } from "@moovio/sdk/models/components";

let value: AsyncCreatedRefund = {
  refundID: "<id>",
  createdOn: new Date("2026-11-13T01:32:10.890Z"),
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