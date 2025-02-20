# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    status: "completed",
    createdOn: new Date("2023-02-25T00:32:40.607Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "eef741eb-ccd1-45db-acc1-d1d53317cafc",
    createdOn: new Date("2024-03-26T19:23:32.284Z"),
    updatedOn: new Date("2023-05-13T09:45:50.507Z"),
    status: "pending",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

