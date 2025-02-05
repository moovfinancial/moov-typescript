# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "completed",
    createdOn: new Date("2023-03-24T15:56:51.260Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "442e30ff-bd21-4d55-bbc9-1501b42fda52",
    createdOn: new Date("2025-10-12T11:41:32.180Z"),
    updatedOn: new Date("2025-08-04T14:36:30.490Z"),
    status: "pending",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

