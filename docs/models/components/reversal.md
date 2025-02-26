# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "completed",
    createdOn: new Date("2025-09-25T21:09:30.950Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "f741ebcc-d15d-4bcc-81d1-d53317cafcb6",
    createdOn: new Date("2024-02-21T05:09:44.984Z"),
    updatedOn: new Date("2025-07-31T04:13:57.429Z"),
    status: "pending",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

