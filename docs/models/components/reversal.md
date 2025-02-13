# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "completed",
    createdOn: new Date("2025-07-21T01:34:36.432Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "49798b56-9047-42b1-8bda-eb3d3d989647",
    createdOn: new Date("2024-11-10T02:57:45.716Z"),
    updatedOn: new Date("2024-08-22T08:34:57.906Z"),
    status: "completed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

