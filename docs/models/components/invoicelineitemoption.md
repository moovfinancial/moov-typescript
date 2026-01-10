# InvoiceLineItemOption

Represents a modifier or option applied to a line item.

## Example Usage

```typescript
import { InvoiceLineItemOption } from "@moovio/sdk/models/components";

let value: InvoiceLineItemOption = {
  name: "<value>",
  quantity: 841985,
  priceModifier: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  images: [
    {
      imageID: "35fb4515-aa19-4ecd-ab01-f93615e83ee4",
      link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      publicID: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the option or modifier.                                                                  |
| `quantity`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | The quantity of this option.                                                                         |
| `priceModifier`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                                 | :heavy_minus_sign:                                                                                   | Optional price modification applied by this option. Can be positive, negative, or zero.              |
| `group`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional group identifier to categorize related options (e.g., 'toppings').                          |
| `images`                                                                                             | [components.InvoiceLineItemImageMetadata](../../models/components/invoicelineitemimagemetadata.md)[] | :heavy_minus_sign:                                                                                   | Optional list of images associated with this line item option.                                       |