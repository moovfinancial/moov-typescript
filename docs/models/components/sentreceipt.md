# SentReceipt

## Example Usage

```typescript
import { SentReceipt } from "@moovio/sdk/models/components";

let value: SentReceipt = {
  receiptID: "b6a0c24b-94d0-4320-b9fe-a3ceacca78ef",
  idempotencyKey: "5813d099-0298-4080-b431-a634e8486e32",
  sentOn: new Date("2009-11-10T23:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `receiptID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the receipt.                                                            |                                                                                               |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The idempotency key used when creating the receipt.                                           |                                                                                               |
| `sentOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the receipt was sent.                                                                    | 2009-11-10T23:00:00Z                                                                          |