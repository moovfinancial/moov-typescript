# GetTransferRiskOutcomesResponse

## Example Usage

```typescript
import { GetTransferRiskOutcomesResponse } from "@moovio/sdk/models/operations";

let value: GetTransferRiskOutcomesResponse = {
  headers: {},
  result: {
    transferID: "d09a94b6-cb1f-4d3f-a34a-a0f56b7b8b2a",
    contributingRules: [
      {
        name: "Velocity",
      },
      {
        name: "Device",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                       | Record<string, *string*[]>                                                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `result`                                                                                                                        | [components.PartnerRiskOutcomesResponse](../../models/components/partnerriskoutcomesresponse.md)                                | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             | {<br/>"transferID": "d09a94b6-cb1f-4d3f-a34a-a0f56b7b8b2a",<br/>"contributingRules": [<br/>{<br/>"name": "Velocity"<br/>},<br/>{<br/>"name": "Device"<br/>}<br/>]<br/>} |