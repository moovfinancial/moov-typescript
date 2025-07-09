# SearchInstitutionsResponse

## Example Usage

```typescript
import { SearchInstitutionsResponse } from "@moovio/sdk/models/operations";

let value: SearchInstitutionsResponse = {
  headers: {},
  result: {
    ach: [],
    rtp: [],
    wire: [
      {
        name: "First Citizens",
        routingNumber: "123456789",
        address: {
          addressLine1: "123 Main Street",
          addressLine2: "Apt 302",
          city: "Boulder",
          stateOrProvince: "CO",
          postalCode: "80301",
          country: "US",
        },
        services: {
          fundsTransferStatus: true,
          fundsSettlementOnlyStatus: false,
          bookEntrySecuritiesTransferStatus: false,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.InstitutionsSearchResponse](../../models/components/institutionssearchresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |