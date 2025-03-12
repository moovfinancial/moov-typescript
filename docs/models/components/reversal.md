# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "pending",
    createdOn: new Date("2023-03-22T14:18:41.379Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "1484480d-91f4-43db-87e7-0b45e9c89cfb",
    createdOn: new Date("2024-01-27T06:22:33.365Z"),
    updatedOn: new Date("2025-04-27T21:01:21.314Z"),
    status: "created",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

