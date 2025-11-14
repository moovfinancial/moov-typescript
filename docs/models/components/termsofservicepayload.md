# TermsOfServicePayload

## Example Usage

```typescript
import { TermsOfServicePayload } from "@moovio/sdk/models/components";

let value: TermsOfServicePayload = {
  manual: {
    acceptedDate: new Date("2023-09-16T06:58:44.067Z"),
    acceptedIP: "172.217.2.46",
    acceptedUserAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36",
    acceptedDomain: "https://surprised-flame.net/",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `manual`                                                                                           | [components.ManualTermsOfService](../../models/components/manualtermsofservice.md)                 | :heavy_minus_sign:                                                                                 | Describes the acceptance of the Terms of Service. All data is required, and must be from the user. |