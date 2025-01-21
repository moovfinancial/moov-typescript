# AsyncCreatedRefund

Asynchronous refund response

## Example Usage

```typescript
import { AsyncCreatedRefund } from "moov-sdk/models/components";

let value: AsyncCreatedRefund = {
  refundID: "6e211e72-9839-4538-943e-24643c51825e",
  createdOn: new Date("2024-11-24T05:30:57.815Z"),
  amount: {
    currency: "Libyan Dinar",
    value: 137724,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `refundID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.Amount](../../models/components/amount.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |