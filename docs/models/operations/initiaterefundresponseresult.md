# InitiateRefundResponseResult


## Supported Types

### `components.CreateRefundResponse`

```typescript
const value: components.CreateRefundResponse = {
  refundID: "5f1e71d1-a379-4e46-b352-889360047bc6",
  createdOn: new Date("2025-03-08T10:53:45.227Z"),
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

### `components.CardAcquiringRefund`

```typescript
const value: components.CardAcquiringRefund = {
  refundID: "a248d6fa-586e-4031-9c3b-8df22a0d6695",
  createdOn: new Date("2023-08-13T15:30:37.197Z"),
  updatedOn: new Date("2025-02-26T19:52:47.838Z"),
  status: "failed",
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

