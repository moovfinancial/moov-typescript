# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "completed",
    createdOn: new Date("2025-07-27T05:08:40.414Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "1cbd14b0-bd76-4402-8fd4-f542ef5b5168",
    createdOn: new Date("2025-06-15T19:50:49.445Z"),
    updatedOn: new Date("2024-06-29T02:38:21.936Z"),
    status: "created",
    amount: {
      currency: "Mexican Peso",
      value: 793260,
    },
  },
};
```

