# CardAccountUpdater

The results of the most recent card update request.

## Example Usage

```typescript
import { CardAccountUpdater } from "moov-sdk/models/components";

let value: CardAccountUpdater = {
  updatedOn: new Date("2024-05-06T12:20:38.184Z"),
  updateType: "number-update",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `updateType`                                                                                  | [components.CardUpdateReason](../../models/components/cardupdatereason.md)                    | :heavy_minus_sign:                                                                            | The results of the card update request.                                                       | number-update                                                                                 |