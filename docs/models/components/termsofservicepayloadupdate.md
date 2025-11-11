# TermsOfServicePayloadUpdate

## Example Usage

```typescript
import { TermsOfServicePayloadUpdate } from "@moovio/sdk/models/components";

let value: TermsOfServicePayloadUpdate = {
  token: {
    token:
      "kgT1uxoMAk7QKuyJcmQE8nqW_HjpyuXBabiXPi6T83fUQoxsyWYPcYzuHQTqrt7YRp4gCwyDQvb6U5REM9Pgl2EloCe35t-eiMAbUWGo3Kerxme6aqNcKrP_6-v0MTXViOEJ96IBxPFTvMV7EROI2dq3u4e-x4BbGSCedAX-ViAQND6hcreCDXwrO6sHuzh5Xi2IzSqZHxaovnWEboaxuZKRJkA3dsFID6fzitMpm2qrOh4",
  },
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
| `token`                                                                                            | [components.TermsOfServiceTokenUpdate](../../models/components/termsofservicetokenupdate.md)       | :heavy_minus_sign:                                                                                 | An encrypted value used to record acceptance of Moov's Terms of Service.                           |
| `manual`                                                                                           | [components.ManualTermsOfServiceUpdate](../../models/components/manualtermsofserviceupdate.md)     | :heavy_minus_sign:                                                                                 | Describes the acceptance of the Terms of Service. All data is required, and must be from the user. |