# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "pending",
    createdOn: new Date("2025-08-15T11:19:32.631Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "b6e8d9f1-c01c-4b9e-9601-b4973b0ab14e",
    createdOn: new Date("2024-10-01T05:59:20.109Z"),
    updatedOn: new Date("2025-04-28T02:56:38.727Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

