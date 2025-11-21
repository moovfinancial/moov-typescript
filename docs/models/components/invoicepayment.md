# InvoicePayment


## Supported Types

### `components.InvoiceTransferPayment`

```typescript
const value: components.InvoiceTransferPayment = {
  paymentType: "transfer",
  transferID: "9dd9928c-457e-4657-8a0e-c33437e452cc",
};
```

### `components.InvoiceExternalPayment`

```typescript
const value: components.InvoiceExternalPayment = {
  paymentType: "external",
  description: "poppy shovel past greedy er readily blah deceivingly red but",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

