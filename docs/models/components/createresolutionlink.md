# CreateResolutionLink

Request body for creating a resolution link.

## Example Usage

```typescript
import { CreateResolutionLink } from "@moovio/sdk/models/components";

let value: CreateResolutionLink = {
  recipient: {
    phone: {
      number: "5555555555",
      countryCode: "1",
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `recipient`                                                                              | [components.ResolutionLinkRecipient](../../models/components/resolutionlinkrecipient.md) | :heavy_check_mark:                                                                       | The recipient contact information for the resolution link.                               |