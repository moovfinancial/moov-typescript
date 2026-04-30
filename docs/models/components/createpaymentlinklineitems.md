# CreatePaymentLinkLineItems

An optional collection of line items for a payment link.
When line items are provided, their total plus sales tax must equal the payment link amount.

## Example Usage

```typescript
import { CreatePaymentLinkLineItems } from "@moovio/sdk/models/components";

let value: CreatePaymentLinkLineItems = {
  items: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.CreatePaymentLinkLineItem](../../models/components/createpaymentlinklineitem.md)[] | :heavy_check_mark:                                                                             | The list of line items.                                                                        |