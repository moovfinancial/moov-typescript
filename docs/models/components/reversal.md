# Reversal

Contains either a cancellation or refund, depending on the method used to reverse the transfer.


## Supported Types

### `components.ReversedWithCancellation`

```typescript
const value: components.ReversedWithCancellation = {
  cancellation: {
    cancellationID: "<id>",
    status: "failed",
    createdOn: new Date("2023-08-08T20:06:14.959Z"),
  },
};
```

### `components.ReversedWithRefund`

```typescript
const value: components.ReversedWithRefund = {
  refund: {
    refundID: "160cfb90-ecd0-4422-8825-9ff21c8fc73b",
    createdOn: new Date("2024-07-14T07:59:29.449Z"),
    updatedOn: new Date("2024-12-10T23:22:58.110Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

