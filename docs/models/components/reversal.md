# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "pending",
    createdOn: new Date("2025-09-11T23:55:44.792Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "6f603d5d-64c1-4e65-839f-53313ab6f2b6",
    createdOn: new Date("2023-08-02T08:02:13.737Z"),
    updatedOn: new Date("2023-07-03T16:53:40.680Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

