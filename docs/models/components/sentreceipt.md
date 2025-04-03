# SentReceipt

## Example Usage

```typescript
import { SentReceipt } from "@moovio/sdk/models/components";

let value: SentReceipt = {
  receiptID: "524278fc-8526-482e-9a6c-2d0682af10bc",
  idempotencyKey: "55d0c2d8-d223-4874-94c1-e6c2c40c9a93",
  sentOn: new Date("2025-11-10T23:00:000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `receiptID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the receipt.                                                            |                                                                                               |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The idempotency key used when creating the receipt.                                           |                                                                                               |
| `sentOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the receipt was sent.                                                                    | 2025-11-10T23:00:000Z                                                                         |