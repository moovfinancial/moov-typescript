# CreateResolutionLinkRequest

## Example Usage

```typescript
import { CreateResolutionLinkRequest } from "@moovio/sdk/models/operations";

let value: CreateResolutionLinkRequest = {
  accountID: "<id>",
  createResolutionLink: {
    recipient: {
      phone: {
        number: "5555555555",
        countryCode: "1",
      },
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `createResolutionLink`                                                             | [components.CreateResolutionLink](../../models/components/createresolutionlink.md) | :heavy_check_mark:                                                                 | N/A                                                                                | {<br/>"recipient": {<br/>"phone": {<br/>"number": "5555555555",<br/>"countryCode": "1"<br/>}<br/>}<br/>} |