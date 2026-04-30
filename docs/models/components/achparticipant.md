# AchParticipant

## Example Usage

```typescript
import { AchParticipant } from "@moovio/sdk/models/components";

let value: AchParticipant = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `achLocation`                                                                    | [components.AchLocation](../../models/components/achlocation.md)                 | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `customerName`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | Main Street Bank                                                                 |
| `newRoutingNumber`                                                               | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 987654321                                                                        |
| `officeCode`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 0                                                                                |
| `phoneNumber`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1234567789                                                                       |
| `recordTypeCode`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `revised`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 041921                                                                           |
| `routingNumber`                                                                  | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 123456789                                                                        |
| `servicingFRBNumber`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 123456789                                                                        |
| `statusCode`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `viewCode`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `cleanName`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | Main Street Bank                                                                 |
| `logo`                                                                           | [components.Logo](../../models/components/logo.md)                               | :heavy_check_mark:                                                               | N/A                                                                              | {<br/>"name": "Main Street Bank",<br/>"url": "https://www.mainstreetbank.com/logo.png"<br/>} |