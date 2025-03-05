# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "pending",
    createdOn: new Date("2023-03-26T15:21:43.295Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "7cafcb61-6d51-4891-8c89-0371b3504d8b",
    createdOn: new Date("2023-08-04T00:15:59.783Z"),
    updatedOn: new Date("2024-10-01T20:58:37.542Z"),
    status: "created",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

