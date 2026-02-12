# WebhookDataCardAutoUpdated

## Example Usage

```typescript
import { WebhookDataCardAutoUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataCardAutoUpdated = {
  cardID: "<id>",
  accountID: "<id>",
  updateType: "number-update",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `cardID`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `updateType`                                                               | [components.CardUpdateReason](../../models/components/cardupdatereason.md) | :heavy_check_mark:                                                         | The results of the card update request.                                    | number-update                                                              |