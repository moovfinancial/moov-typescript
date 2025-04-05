# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "completed",
    createdOn: new Date("2024-04-10T11:10:19.891Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "d10fba4f-1e77-4eaa-9b86-94194a004e3a",
    createdOn: new Date("2025-06-29T01:50:01.107Z"),
    updatedOn: new Date("2025-02-23T06:08:55.885Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

