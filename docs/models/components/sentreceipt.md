# SentReceipt

## Example Usage

```typescript
import { SentReceipt } from "@moovio/sdk/models/components";

let value: SentReceipt = {
  receiptID: "8a0adc80-7489-46c5-93a1-46118bee6911",
  idempotencyKey: "a15f3c0b-6a0c-424b-b94d-03209fea3cea",
  sentOn: new Date("2009-11-10T23:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `receiptID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the receipt.                                                            |                                                                                               |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The idempotency key used when creating the receipt.                                           |                                                                                               |
| `sentOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the receipt was sent.                                                                    | 2009-11-10T23:00:00Z                                                                          |