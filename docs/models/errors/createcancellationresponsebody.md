# CreateCancellationResponseBody

The request conflicted with the current state of the target resource.


## Supported Types

### `errors.GenericError`

```typescript
const value: errors.GenericError = {
  error: "<value>",
};
```

### `errors.Cancellation`

```typescript
const value: errors.Cancellation = {
  cancellationID: "<id>",
  status: "failed",
  createdOn: new Date("2026-09-04T17:34:30.254Z"),
};
```

