# TransferRailOptions

## Example Usage

```typescript
import { TransferRailOptions } from "@moovio/sdk/models/components";

let value: TransferRailOptions = {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cardPayment`                                                                    | [components.CardPaymentOptions](../../models/components/cardpaymentoptions.md)   | :heavy_minus_sign:                                                               | N/A                                                                              |
| `pushToCard`                                                                     | [components.PushToCardOptions](../../models/components/pushtocardoptions.md)     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `pullFromCard`                                                                   | [components.PullFromCardOptions](../../models/components/pullfromcardoptions.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `achDebit`                                                                       | [components.ACHDebitOptions](../../models/components/achdebitoptions.md)         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `achCredit`                                                                      | [components.ACHCreditOptions](../../models/components/achcreditoptions.md)       | :heavy_minus_sign:                                                               | N/A                                                                              |