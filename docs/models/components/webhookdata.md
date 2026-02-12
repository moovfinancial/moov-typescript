# WebhookData

The data for the webhook event. The contents are based on the event type.


## Supported Types

### `components.WebhookDataAccountCreated`

```typescript
const value: components.WebhookDataAccountCreated = {
  accountID: "<id>",
};
```

### `components.WebhookDataAccountUpdated`

```typescript
const value: components.WebhookDataAccountUpdated = {
  accountID: "<id>",
};
```

### `components.WebhookDataAccountDisconnected`

```typescript
const value: components.WebhookDataAccountDisconnected = {
  accountID: "<id>",
};
```

### `components.WebhookDataBalanceUpdated`

```typescript
const value: components.WebhookDataBalanceUpdated = {
  accountID: "<id>",
  walletID: "<id>",
};
```

### `components.WebhookDataBankAccountCreated`

```typescript
const value: components.WebhookDataBankAccountCreated = {
  bankAccountID: "<id>",
  accountID: "<id>",
};
```

### `components.WebhookDataBankAccountUpdated`

```typescript
const value: components.WebhookDataBankAccountUpdated = {
  bankAccountID: "<id>",
  accountID: "<id>",
  status: "new",
  statusReason: "max-verification-failures",
};
```

### `components.WebhookDataBankAccountDeleted`

```typescript
const value: components.WebhookDataBankAccountDeleted = {
  bankAccountID: "<id>",
  accountID: "<id>",
};
```

### `components.WebhookDataCancellationCreated`

```typescript
const value: components.WebhookDataCancellationCreated = {
  cancellationID: "<id>",
  transferID: "<id>",
  status: "completed",
};
```

### `components.WebhookDataCancellationUpdated`

```typescript
const value: components.WebhookDataCancellationUpdated = {
  cancellationID: "<id>",
  transferID: "<id>",
  status: "pending",
};
```

### `components.WebhookDataCardAutoUpdated`

```typescript
const value: components.WebhookDataCardAutoUpdated = {
  cardID: "<id>",
  accountID: "<id>",
  updateType: "number-update",
};
```

### `components.WebhookDataCapabilityRequested`

```typescript
const value: components.WebhookDataCapabilityRequested = {
  accountID: "<id>",
  capabilityID: "card-issuing",
};
```

### `components.WebhookDataCapabilityUpdated`

```typescript
const value: components.WebhookDataCapabilityUpdated = {
  accountID: "<id>",
  capabilityID: "transfers",
  status: "disabled",
};
```

### `components.WebhookDataDisputeCreated`

```typescript
const value: components.WebhookDataDisputeCreated = {
  accountID: "<id>",
  transferID: "<id>",
  transactionID: "<id>",
  disputeID: "<id>",
  status: "accepted",
  phase: "pre-dispute",
};
```

### `components.WebhookDataDisputeUpdated`

```typescript
const value: components.WebhookDataDisputeUpdated = {
  accountID: "<id>",
  transferID: "<id>",
  transactionID: "<id>",
  disputeID: "<id>",
  status: "resolved",
  phase: "pre-dispute",
};
```

### `components.WebhookDataInvoiceCreated`

```typescript
const value: components.WebhookDataInvoiceCreated = {
  accountID: "<id>",
  invoiceID: "<id>",
};
```

### `components.WebhookDataInvoiceUpdated`

```typescript
const value: components.WebhookDataInvoiceUpdated = {
  accountID: "<id>",
  invoiceID: "<id>",
  status: "unpaid",
};
```

### `components.WebhookDataNetworkIDUpdated`

```typescript
const value: components.WebhookDataNetworkIDUpdated = {
  accountID: "<id>",
};
```

### `components.WebhookDataPaymentMethodEnabled`

```typescript
const value: components.WebhookDataPaymentMethodEnabled = {
  accountID: "<id>",
  paymentMethodID: "<id>",
  sourceID: "<id>",
};
```

### `components.WebhookDataPaymentMethodDisabled`

```typescript
const value: components.WebhookDataPaymentMethodDisabled = {
  accountID: "<id>",
  paymentMethodID: "<id>",
  sourceID: "<id>",
};
```

### `components.WebhookDataRefundCreated`

```typescript
const value: components.WebhookDataRefundCreated = {
  accountID: "<id>",
  transferID: "<id>",
  refundID: "<id>",
};
```

### `components.WebhookDataRefundUpdated`

```typescript
const value: components.WebhookDataRefundUpdated = {
  accountID: "<id>",
  transferID: "<id>",
  refundID: "<id>",
  status: "completed",
};
```

### `components.WebhookDataRepresentativeCreated`

```typescript
const value: components.WebhookDataRepresentativeCreated = {
  accountID: "<id>",
  representativeID: "<id>",
};
```

### `components.WebhookDataRepresentativeUpdated`

```typescript
const value: components.WebhookDataRepresentativeUpdated = {
  accountID: "<id>",
  representativeID: "<id>",
};
```

### `components.WebhookDataRepresentativeDisabled`

```typescript
const value: components.WebhookDataRepresentativeDisabled = {
  accountID: "<id>",
  representativeID: "<id>",
};
```

### `components.WebhookDataSweepCreated`

```typescript
const value: components.WebhookDataSweepCreated = {
  walletID: "<id>",
  sweepID: "<id>",
};
```

### `components.WebhookDataSweepUpdated`

```typescript
const value: components.WebhookDataSweepUpdated = {
  walletID: "<id>",
  sweepID: "<id>",
  status: "canceled",
};
```

### `components.WebhookDataTerminalApplicationCreated`

```typescript
const value: components.WebhookDataTerminalApplicationCreated = {
  terminalApplicationID: "<id>",
  status: "enabled",
};
```

### `components.WebhookDataTerminalApplicationUpdated`

```typescript
const value: components.WebhookDataTerminalApplicationUpdated = {
  terminalApplicationID: "<id>",
  status: "enabled",
};
```

### `components.WebhookDataTicketCreated`

```typescript
const value: components.WebhookDataTicketCreated = {
  accountID: "<id>",
  ticketID: "<id>",
};
```

### `components.WebhookDataTicketUpdated`

```typescript
const value: components.WebhookDataTicketUpdated = {
  accountID: "<id>",
  ticketID: "<id>",
  status: "closed",
};
```

### `components.WebhookDataTicketMessageAdded`

```typescript
const value: components.WebhookDataTicketMessageAdded = {
  accountID: "<id>",
  ticketID: "<id>",
};
```

### `components.WebhookDataTransferCreated`

```typescript
const value: components.WebhookDataTransferCreated = {
  accountID: "<id>",
  transferID: "<id>",
  status: "source.corrected",
};
```

### `components.WebhookDataTransferUpdated`

```typescript
const value: components.WebhookDataTransferUpdated = {
  accountID: "<id>",
  transferID: "<id>",
  status: "source.returned",
  source: {
    accountID: "<id>",
    paymentMethodID: "<id>",
  },
  destination: {
    accountID: "<id>",
    paymentMethodID: "<id>",
  },
};
```

### `components.WebhookDataWalletCreated`

```typescript
const value: components.WebhookDataWalletCreated = {
  accountID: "<id>",
  walletID: "<id>",
};
```

### `components.WebhookDataWalletUpdated`

```typescript
const value: components.WebhookDataWalletUpdated = {
  accountID: "<id>",
  walletID: "<id>",
  status: "closed",
};
```

### `components.WebhookDataWalletTransactionUpdated`

```typescript
const value: components.WebhookDataWalletTransactionUpdated = {
  accountID: "<id>",
  walletID: "<id>",
  transactionID: "<id>",
  status: "failed",
  availableBalance: {
    currency: "USD",
    value: 1204,
    valueDecimal: "<value>",
  },
};
```

### `components.WebhookBillingStatementCreated`

```typescript
const value: components.WebhookBillingStatementCreated = {
  statementID: "<id>",
};
```

