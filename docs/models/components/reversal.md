# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "completed",
    createdOn: new Date("2025-02-15T17:16:46.367Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "88939447-3942-4e6f-b603-d5d64c1e6539",
    createdOn: new Date("2024-01-22T06:01:41.855Z"),
    updatedOn: new Date("2023-09-10T19:30:29.998Z"),
    status: "created",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

