# TermsOfServicePayloadUpdate

## Example Usage

```typescript
import { TermsOfServicePayloadUpdate } from "@moovio/sdk/models/components";

let value: TermsOfServicePayloadUpdate = {
  manual: {
    acceptedIP: "172.217.2.46",
    acceptedUserAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `manual`                                                                                           | [components.ManualTermsOfServiceUpdate](../../models/components/manualtermsofserviceupdate.md)     | :heavy_minus_sign:                                                                                 | Describes the acceptance of the Terms of Service. All data is required, and must be from the user. |