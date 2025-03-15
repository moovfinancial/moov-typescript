# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "completed",
    createdOn: new Date("2023-04-12T12:02:51.750Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "864f4afb-aca6-43fa-8060-d383aac8dc8d",
    createdOn: new Date("2023-06-03T17:02:41.001Z"),
    updatedOn: new Date("2025-12-20T21:51:43.369Z"),
    status: "created",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

