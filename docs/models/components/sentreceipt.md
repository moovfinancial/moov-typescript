# SentReceipt

## Example Usage

```typescript
import { SentReceipt } from "@moovio/sdk/models/components";

let value: SentReceipt = {
  receiptID: "a541241b-7a43-4c72-ab4e-a0fd79df70c2",
  idempotencyKey: "e22589e0-1fce-467f-9494-d58a1f605351",
  sentOn: new Date("2025-11-10T23:00:000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `receiptID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the receipt.                                                            |                                                                                               |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The idempotency key used when creating the receipt.                                           |                                                                                               |
| `sentOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the receipt was sent.                                                                    | 2025-11-10T23:00:000Z                                                                         |