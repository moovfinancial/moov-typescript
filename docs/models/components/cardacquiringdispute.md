# CardAcquiringDispute

Details of a card dispute.

## Example Usage

```typescript
import { CardAcquiringDispute } from "@moovio/sdk/models/components";

let value: CardAcquiringDispute = {
  disputeID: "0ab14e79-cd18-43bf-90aa-6a6f7debab24",
  createdOn: new Date("2024-04-09T14:14:15.442Z"),
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `disputeID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.Amount](../../models/components/amount.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |