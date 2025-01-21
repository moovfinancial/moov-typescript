# SchedulePaymentMethod

## Example Usage

```typescript
import { SchedulePaymentMethod } from "moov-sdk/models/components";

let value: SchedulePaymentMethod = {
  paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  achDetails: {
    companyEntryDescription: "Gym dues",
    originatingCompanyName: "Whole Body Fit",
  },
  cardDetails: {
    dynamicDescriptor: "WhlBdy *Yoga 11-12",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `paymentMethodID`                                                | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | c520f1b9-0ba7-42f5-b977-248cdbe41c69                             |
| `achDetails`                                                     | [components.AchDetails](../../models/components/achdetails.md)   | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `cardDetails`                                                    | [components.CardDetails](../../models/components/carddetails.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |