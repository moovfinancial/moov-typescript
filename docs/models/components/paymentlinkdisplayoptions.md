# PaymentLinkDisplayOptions

Customizable display options for a payment link.

## Example Usage

```typescript
import { PaymentLinkDisplayOptions } from "@moovio/sdk/models/components";

let value: PaymentLinkDisplayOptions = {
  title: "<value>",
  description: "oh intend dirty qua provided out bend",
  callToAction: "auto",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                                                      | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The payment page title displayed to the user.                                                                                                                                |
| `description`                                                                                                                                                                | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | A payment description displayed to the user.                                                                                                                                 |
| `callToAction`                                                                                                                                                               | [components.CallToAction](../../models/components/calltoaction.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                           | The text to be displayed on web form's submit button.<br/><br/>If set to "auto" the UI will automatically select between <br/>"pay" and "confirm" for payments and payouts respectively. |