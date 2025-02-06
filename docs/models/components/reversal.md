# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "completed",
    createdOn: new Date("2025-12-11T16:56:11.720Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "e6c4efb5-f068-4836-abcb-0a3a693ae51f",
    createdOn: new Date("2025-06-30T15:06:40.008Z"),
    updatedOn: new Date("2025-11-03T00:52:46.065Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

