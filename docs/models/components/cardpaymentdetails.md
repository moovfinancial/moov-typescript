# CardPaymentDetails

Options for payment links used to collect a card payment.

## Example Usage

```typescript
import { CardPaymentDetails } from "@moovio/sdk/models/components";

let value: CardPaymentDetails = {
  dynamicDescriptor: "WhlBdy *Yoga 11-12",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `dynamicDescriptor`                                                                                                               | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | An optional override of the default card statement descriptor for a transfer. Accounts must be enabled by Moov to set this field. | WhlBdy *Yoga 11-12                                                                                                                |