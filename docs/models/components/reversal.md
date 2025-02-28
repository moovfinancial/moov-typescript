# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "completed",
    createdOn: new Date("2023-09-08T06:21:23.364Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "94473942-e6f6-403d-85d6-4c1e6539f533",
    createdOn: new Date("2023-09-17T10:32:52.540Z"),
    updatedOn: new Date("2024-12-07T01:02:09.495Z"),
    status: "completed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

