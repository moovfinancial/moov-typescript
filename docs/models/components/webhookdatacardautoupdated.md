# WebhookDataCardAutoUpdated

## Example Usage

```typescript
import { WebhookDataCardAutoUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataCardAutoUpdated = {
  cardID: "456e6756-7a0f-4174-9bb0-f41b46e79a40",
  accountID: "822de661-8f8e-4ba0-86bb-8f83b0e9c7b5",
  updateType: "number-update",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `cardID`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `accountID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `updateType`                                                               | [components.CardUpdateReason](../../models/components/cardupdatereason.md) | :heavy_check_mark:                                                         | The results of the card update request.                                    | number-update                                                              |