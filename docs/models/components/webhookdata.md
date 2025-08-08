# WebhookData

The data for the webhook event. The contents are based on the event type.


## Supported Types

### `components.WebhookDataAccountCreated`

```typescript
const value: components.WebhookDataAccountCreated = {
  accountID: "b98e80e4-1486-44ee-b4b2-555e114a83d3",
};
```

### `components.WebhookDataAccountUpdated`

```typescript
const value: components.WebhookDataAccountUpdated = {
  accountID: "14c0d004-6383-4b15-910a-3176daa0f391",
};
```

### `components.WebhookDataAccountDisconnected`

```typescript
const value: components.WebhookDataAccountDisconnected = {
  accountID: "a8d8f566-2ddb-4667-b0ac-afab2cd67de8",
};
```

### `components.WebhookDataBalanceUpdated`

```typescript
const value: components.WebhookDataBalanceUpdated = {
  accountID: "f7b90dae-65f2-4d8a-af1d-f0153c468b99",
  walletID: "f8329684-faae-464b-bb62-5e530d0bec8a",
};
```

### `components.WebhookDataBankAccountCreated`

```typescript
const value: components.WebhookDataBankAccountCreated = {
  bankAccountID: "84ab4e3e-00b0-49a3-bfad-e691d2f347cb",
  accountID: "122db109-18cc-459b-9369-561d1497c4d2",
};
```

### `components.WebhookDataBankAccountUpdated`

```typescript
const value: components.WebhookDataBankAccountUpdated = {
  bankAccountID: "154d7945-277b-486f-be90-2100ae7163b4",
  accountID: "4193e837-47d4-46ca-9db9-df2801a04f4d",
  status: "new",
  statusReason: "verification-initiated",
};
```

### `components.WebhookDataBankAccountDeleted`

```typescript
const value: components.WebhookDataBankAccountDeleted = {
  bankAccountID: "f140c69c-0058-4a66-a287-c4921d7cdf91",
  accountID: "4893e0d7-6ca3-4767-a23d-2c2ab02442a2",
};
```

### `components.WebhookDataCancellationCreated`

```typescript
const value: components.WebhookDataCancellationCreated = {
  cancellationID: "8e96951f-8f83-4634-9a76-b6a5d7b2ba3b",
  transferID: "f1fe921b-a888-46cd-ac6f-498cb037c9d9",
  status: "completed",
};
```

### `components.WebhookDataCancellationUpdated`

```typescript
const value: components.WebhookDataCancellationUpdated = {
  cancellationID: "1470a08c-29d1-4cbb-b41c-ab38e894aa78",
  transferID: "5fc783ac-53b7-4aec-8274-bc1e510cfbfc",
  status: "failed",
};
```

### `components.WebhookDataCardAutoUpdated`

```typescript
const value: components.WebhookDataCardAutoUpdated = {
  cardID: "03680e4b-d47d-4bb3-8672-cd6e0ddee54e",
  accountID: "b041ae28-df08-45e0-9761-8f5081f73a33",
  updateType: "number-update",
};
```

### `components.WebhookDataCapabilityRequested`

```typescript
const value: components.WebhookDataCapabilityRequested = {
  accountID: "ba4f022f-292d-4fe4-9d4f-e3c6b08ff0ca",
  capabilityID: "platform.production-app",
};
```

### `components.WebhookDataCapabilityUpdated`

```typescript
const value: components.WebhookDataCapabilityUpdated = {
  accountID: "1477b656-5ec7-4d15-bdd8-4e69e651119b",
  capabilityID: "wallet.balance",
  status: "in-review",
};
```

### `components.WebhookDataDisputeCreated`

```typescript
const value: components.WebhookDataDisputeCreated = {
  accountID: "80a50721-b4bc-40fe-8014-27bf95843fb5",
  transferID: "b1084ed6-048b-4936-a80f-d1387056cf16",
  transactionID: "aa861184-d369-4d18-8f48-45aa143f88b8",
  disputeID: "414675d3-5cb0-4104-b64c-f825e7d59d90",
  status: "lost",
  phase: "unknown",
};
```

### `components.WebhookDataDisputeUpdated`

```typescript
const value: components.WebhookDataDisputeUpdated = {
  accountID: "30af6f83-e464-4ec6-877d-46f83da105aa",
  transferID: "f68fa9d9-0f87-4466-896f-af7922a88237",
  transactionID: "a2680c29-7e95-4f0e-a191-ba05cb43578e",
  disputeID: "4a5fe9c9-88a0-4e5e-8e2d-4520dfcca96d",
  status: "resolved",
  phase: "unknown",
};
```

### `components.WebhookDataNetworkIDUpdated`

```typescript
const value: components.WebhookDataNetworkIDUpdated = {
  accountID: "227f2775-f56f-4801-9052-9636ab5c06b8",
};
```

### `components.WebhookDataPaymentMethodEnabled`

```typescript
const value: components.WebhookDataPaymentMethodEnabled = {
  accountID: "e1be65d6-b3c2-472a-b4b0-77ee1b8dbeda",
  paymentMethodID: "43bcc7ed-48f2-44d4-8af1-54f6f15e4578",
  sourceID: "214e3a23-b8ff-4d48-8f25-72c6906ca30c",
};
```

### `components.WebhookDataPaymentMethodDisabled`

```typescript
const value: components.WebhookDataPaymentMethodDisabled = {
  accountID: "841ad4ae-3335-4f0e-af5d-d1db0541aee7",
  paymentMethodID: "99f155e9-70af-4b88-ad62-ccd5cf5bf0c4",
  sourceID: "8ace6bcf-816e-4e09-8ab9-33e79248ffbb",
};
```

### `components.WebhookDataRefundCreated`

```typescript
const value: components.WebhookDataRefundCreated = {
  accountID: "9c714210-4a92-44c1-901b-19ff73dda6f7",
  transferID: "c589eaa0-578d-4bba-849f-bfddaae68467",
  refundID: "a81eab9f-4808-4d29-ae5e-7bf24c9ba2aa",
};
```

### `components.WebhookDataRefundUpdated`

```typescript
const value: components.WebhookDataRefundUpdated = {
  accountID: "b6bd22cd-db57-43fb-b13d-7e2fa2f7bfc0",
  transferID: "83bde1cf-5cc8-4a0d-bdcd-749074d7e768",
  refundID: "1b303b50-49f0-483f-8708-254bbf41629f",
  status: "pending",
};
```

### `components.WebhookDataRepresentativeCreated`

```typescript
const value: components.WebhookDataRepresentativeCreated = {
  accountID: "e5da8363-396f-4c5d-859d-447f4984ec07",
  representativeID: "f7b81c23-b730-4391-83ff-cfe2f6419b4c",
};
```

### `components.WebhookDataRepresentativeUpdated`

```typescript
const value: components.WebhookDataRepresentativeUpdated = {
  accountID: "446d4f0a-eee7-4b23-8cbf-f15d3d72448d",
  representativeID: "cfa89b01-3336-4634-866c-97cb0561705a",
};
```

### `components.WebhookDataRepresentativeDisabled`

```typescript
const value: components.WebhookDataRepresentativeDisabled = {
  accountID: "c4e6ae8e-a9e6-4053-8d90-24e202e88b11",
  representativeID: "bcb9c961-4d62-4ceb-99db-eb29fec9958c",
};
```

### `components.WebhookDataSweepCreated`

```typescript
const value: components.WebhookDataSweepCreated = {
  walletID: "b3448046-0079-4b33-81d4-58be44d10630",
  sweepID: "f447ba26-4ce2-45d2-9827-0489e6b882fd",
};
```

### `components.WebhookDataSweepUpdated`

```typescript
const value: components.WebhookDataSweepUpdated = {
  walletID: "6c14b3a4-f315-44a8-bb1c-980fbf714605",
  sweepID: "3fb38463-61bb-4a28-8094-d2c59be60262",
  status: "canceled",
};
```

### `components.WebhookDataTerminalApplicationCreated`

```typescript
const value: components.WebhookDataTerminalApplicationCreated = {
  terminalApplicationID: "e793d220-7c40-44e4-b552-e98c281a4bce",
  status: "enabled",
};
```

### `components.WebhookDataTerminalApplicationUpdated`

```typescript
const value: components.WebhookDataTerminalApplicationUpdated = {
  terminalApplicationID: "9ed01e9a-932f-43e9-bfad-e6b29c3949f5",
  status: "enabled",
};
```

### `components.WebhookDataTransferCreated`

```typescript
const value: components.WebhookDataTransferCreated = {
  accountID: "58def9c9-c9f3-482a-9046-fd2d2e0ce3aa",
  transferID: "498acea5-c87f-4b41-9aea-b131afe24ddf",
  status: "queued",
};
```

### `components.WebhookDataTransferUpdated`

```typescript
const value: components.WebhookDataTransferUpdated = {
  accountID: "7b54a415-9f1d-4c27-bfa5-d474acf1a242",
  transferID: "1c7cd638-93c3-4d3e-9965-9a70f1a42bd8",
  status: "reversed",
  source: {
    accountID: "2e8260fd-b5a3-4f8d-aacf-2f7a69cb00db",
    paymentMethodID: "bf898ff1-fe1c-48e0-a991-fa5ac8dcfb69",
  },
  destination: {
    accountID: "d7834ce6-70b4-443f-b54d-df4ad4e0d27c",
    paymentMethodID: "82a4e7be-d736-410a-b9e0-63f5d10817de",
  },
};
```

### `components.WebhookDataWalletTransactionUpdated`

```typescript
const value: components.WebhookDataWalletTransactionUpdated = {
  accountID: "e491bd4d-7651-462a-9ebb-cd425ad33721",
  walletID: "33116a57-862b-43c9-aa42-3ee3b87d442d",
  transactionID: "378090e8-e3a0-4a6e-a96e-d2e5ca55e064",
  status: "canceled",
  availableBalance: {
    currency: "USD",
    value: 1204,
    valueDecimal: "<value>",
  },
};
```

