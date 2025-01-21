# CardAcquiringDispute

Details of a card dispute.

## Example Usage

```typescript
import { CardAcquiringDispute } from "moov-sdk/models/components";

let value: CardAcquiringDispute = {
  disputeID: "3ed75f38-039a-49df-bc7d-1a82f59e81d5",
  createdOn: new Date("2025-08-26T16:08:40.356Z"),
  amount: {
    currency: "Turkish Lira",
    value: 356253,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `disputeID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.Amount](../../models/components/amount.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |