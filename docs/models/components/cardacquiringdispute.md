# CardAcquiringDispute

Details of a card dispute.

## Example Usage

```typescript
import { CardAcquiringDispute } from "@moovio/sdk/models/components";

let value: CardAcquiringDispute = {
  disputeID: "bcc1d1d5-3317-4caf-8cb6-16d51891c890",
  createdOn: new Date("2024-04-27T18:05:33.637Z"),
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