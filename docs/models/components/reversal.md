# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "completed",
    createdOn: new Date("2023-05-13T14:09:00.250Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "b31f0079-2bf7-41df-8d9d-6715ed9e6ff9",
    createdOn: new Date("2025-08-27T14:08:51.409Z"),
    updatedOn: new Date("2025-09-25T21:09:30.950Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

