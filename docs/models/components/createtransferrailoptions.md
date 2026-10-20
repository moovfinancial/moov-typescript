# CreateTransferRailOptions

Rail-specific options for a new transfer. Set only the key that matches the transfer's rail.

## Example Usage

```typescript
import { CreateTransferRailOptions } from "@moovio/sdk/models/components";

let value: CreateTransferRailOptions = {
  cardPayment: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
  pushToCard: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
  pullFromCard: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
  achDebit: {
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
    debitHoldPeriod: "2-days",
  },
  achCredit: {
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `cardPayment`                                                                                        | [components.CreateTransferSourceCard](../../models/components/createtransfersourcecard.md)           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `pushToCard`                                                                                         | [components.CreateTransferDestinationCard](../../models/components/createtransferdestinationcard.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `pullFromCard`                                                                                       | [components.CreateTransferSourceCard](../../models/components/createtransfersourcecard.md)           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `achDebit`                                                                                           | [components.CreateTransferSourceACH](../../models/components/createtransfersourceach.md)             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `achCredit`                                                                                          | [components.CreateTransferDestinationACH](../../models/components/createtransferdestinationach.md)   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |