# CreateTransferDestination

The final stage of a transfer and the ultimate recipient of the funds.

## Example Usage

```typescript
import { CreateTransferDestination } from "@moovio/sdk/models/components";

let value: CreateTransferDestination = {
  paymentMethodID: "<id>",
  cardDetails: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
  achDetails: {
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
  },
  wireDetails: {
    beneficiaryReference: "INV-2026-001",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cardDetails`                                                                                        | [components.CreateTransferDestinationCard](../../models/components/createtransferdestinationcard.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `achDetails`                                                                                         | [components.CreateTransferDestinationACH](../../models/components/createtransferdestinationach.md)   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `wireDetails`                                                                                        | [components.CreateTransferDestinationWire](../../models/components/createtransferdestinationwire.md) | :heavy_minus_sign:                                                                                   | Wire-specific options supplied when creating a transfer.                                             |