# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "pending",
    createdOn: new Date("2024-10-05T21:17:53.356Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "cc060333-54f5-4e2c-9070-cf0ec5e461a0",
    createdOn: new Date("2025-01-18T18:40:42.345Z"),
    updatedOn: new Date("2025-06-19T01:50:01.880Z"),
    status: "created",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

