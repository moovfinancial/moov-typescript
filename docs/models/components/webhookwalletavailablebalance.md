# WebhookWalletAvailableBalance

The available balance of a wallet.

## Example Usage

```typescript
import { WebhookWalletAvailableBalance } from "@moovio/sdk/models/components";

let value: WebhookWalletAvailableBalance = {
  currency: "Syrian Pound",
  value: 108965,
  valueDecimal: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currency`         | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *number*           | :heavy_check_mark: | N/A                |
| `valueDecimal`     | *string*           | :heavy_check_mark: | N/A                |