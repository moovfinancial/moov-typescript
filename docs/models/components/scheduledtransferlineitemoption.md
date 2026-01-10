# ScheduledTransferLineItemOption

Represents a modifier or option applied to a scheduled transfer line item.

## Example Usage

```typescript
import { ScheduledTransferLineItemOption } from "@moovio/sdk/models/components";

let value: ScheduledTransferLineItemOption = {
  name: "<value>",
  quantity: 678487,
  priceModifier: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  images: [
    {
      imageID: "5d5d240d-d6b6-497f-9d81-3f2acaf445ca",
      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      publicID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the option or modifier.                                                                      |
| `quantity`                                                                                               | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The quantity of this option.                                                                             |
| `priceModifier`                                                                                          | [components.AmountDecimal](../../models/components/amountdecimal.md)                                     | :heavy_minus_sign:                                                                                       | Optional price modification applied by this option. Can be positive, negative, or zero.                  |
| `group`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Optional group identifier to categorize related options (e.g., 'toppings').                              |
| `images`                                                                                                 | [components.ScheduledTransferImageMetadata](../../models/components/scheduledtransferimagemetadata.md)[] | :heavy_minus_sign:                                                                                       | Optional list of images associated with this line item.                                                  |