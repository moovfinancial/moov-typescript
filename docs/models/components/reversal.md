# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "pending",
    createdOn: new Date("2024-08-13T01:23:24.662Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "64f4afba-ca63-4fa0-860d-383aac8dc8d1",
    createdOn: new Date("2025-12-20T21:51:43.369Z"),
    updatedOn: new Date("2023-05-24T08:13:59.741Z"),
    status: "completed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

