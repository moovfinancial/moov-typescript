# PushToCardOptions

## Example Usage

```typescript
import { PushToCardOptions } from "@moovio/sdk/models/components";

let value: PushToCardOptions = {
  dynamicDescriptor: "WhlBdy *Yoga 11-12",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `dynamicDescriptor`                                                                                                               | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | An optional override of the default card statement descriptor for a transfer. Accounts must be enabled by Moov to set this field. | WhlBdy *Yoga 11-12                                                                                                                |
| `scheduledDeliveryOn`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_minus_sign:                                                                                                                | The scheduled date and time for the push-to-card transfer to be delivered, as set when the transfer was created.                  |                                                                                                                                   |