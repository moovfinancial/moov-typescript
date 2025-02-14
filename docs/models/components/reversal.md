# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "pending",
    createdOn: new Date("2023-09-29T10:14:16.977Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "13ab6f2b-6332-4f69-a6cc-0afd49798b56",
    createdOn: new Date("2023-01-09T20:45:49.123Z"),
    updatedOn: new Date("2023-10-25T17:44:56.080Z"),
    status: "pending",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

