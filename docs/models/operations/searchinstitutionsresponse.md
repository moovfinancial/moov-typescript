# SearchInstitutionsResponse

## Example Usage

```typescript
import { SearchInstitutionsResponse } from "@moovio/sdk/models/operations";

let value: SearchInstitutionsResponse = {
  headers: {},
  result: {
    ach: [],
    rtp: [],
    wire: null,
    fednow: [
      {
        name: "First Citizens",
        routingNumber: "123456789",
        services: {
          receivePayments: true,
          sendPayments: true,
          requestForPayment: true,
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