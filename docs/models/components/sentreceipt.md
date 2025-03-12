# SentReceipt

## Example Usage

```typescript
import { SentReceipt } from "@moovio/sdk/models/components";

let value: SentReceipt = {
  receiptID: "f316bd35-1558-4b70-bb3a-e60e4b5da422",
  idempotencyKey: "12920346-bca8-4171-8d46-06a7d6fdc235",
  sentOn: new Date("2009-11-10T23:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `receiptID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the receipt.                                                            |                                                                                               |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The idempotency key used when creating the receipt.                                           |                                                                                               |
| `sentOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the receipt was sent.                                                                    | 2009-11-10T23:00:00Z                                                                          |