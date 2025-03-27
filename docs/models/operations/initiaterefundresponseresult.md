# InitiateRefundResponseResult


## Supported Types

### `components.CreateRefundResponse`

```typescript
const value: components.CreateRefundResponse = {
  refundID: "98a04b54-dcba-4f02-9744-f00e207e4ed4",
  createdOn: new Date("2025-10-09T10:00:22.006Z"),
  updatedOn: new Date("2023-05-16T02:56:07.560Z"),
  status: "created",
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

### `components.CardAcquiringRefund`

```typescript
const value: components.CardAcquiringRefund = {
  refundID: "3320b271-56eb-4e72-a698-e94f27eb8b76",
  createdOn: new Date("2025-03-18T18:15:52.333Z"),
  updatedOn: new Date("2025-10-24T10:57:13.571Z"),
  status: "failed",
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

