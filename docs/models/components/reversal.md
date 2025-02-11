# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "completed",
    createdOn: new Date("2023-11-21T01:25:00.188Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "9798b569-0472-4b1b-adae-b3d3d9896472",
    createdOn: new Date("2024-08-22T08:34:57.906Z"),
    updatedOn: new Date("2025-01-07T16:39:16.650Z"),
    status: "completed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

