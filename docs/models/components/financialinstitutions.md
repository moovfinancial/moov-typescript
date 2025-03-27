# FinancialInstitutions

## Example Usage

```typescript
import { FinancialInstitutions } from "@moovio/sdk/models/components";

let value: FinancialInstitutions = {
  achParticipants: [
    {
      achLocation: {
        address: "123 Main Street",
        city: "Boulder",
        postalCode: "80301",
        postalCodeExtension: "0000",
        state: "Colorado",
      },
      customerName: "Main Street Bank",
      newRoutingNumber: "987654321",
      officeCode: "0",
      phoneNumber: "1234567789",
      recordTypeCode: "1",
      revised: "041921",
      routingNumber: "123456789",
      servicingFRBNumber: "123456789",
      statusCode: "1",
      viewCode: "1",
      cleanName: "Main Street Bank",
      logo: {
        name: "Main Street Bank",
        url: "https://www.mainstreetbank.com/logo.png",
      },
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `achParticipants`                                                        | [components.AchParticipant](../../models/components/achparticipant.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |