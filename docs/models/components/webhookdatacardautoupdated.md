# WebhookDataCardAutoUpdated

## Example Usage

```typescript
import { WebhookDataCardAutoUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataCardAutoUpdated = {
  cardID: "03680e4b-d47d-4bb3-8672-cd6e0ddee54e",
  accountID: "b041ae28-df08-45e0-9761-8f5081f73a33",
  updateType: "number-update",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `cardID`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `updateType`                                                               | [components.CardUpdateReason](../../models/components/cardupdatereason.md) | :heavy_check_mark:                                                         | The results of the card update request.                                    | number-update                                                              |