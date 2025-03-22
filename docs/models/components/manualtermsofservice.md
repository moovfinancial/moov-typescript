# ManualTermsOfService

Describes the acceptance of the Terms of Service. All data is required, and must be from the user.

## Example Usage

```typescript
import { ManualTermsOfService } from "@moovio/sdk/models/components";

let value: ManualTermsOfService = {
  acceptedDate: new Date("2023-08-20T04:01:20.962Z"),
  acceptedIP: "172.217.2.46",
  acceptedUserAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36",
  acceptedDomain: "https://negligible-lady.com",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `acceptedDate`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | The date and time the terms of service were accepted.                                                                    |                                                                                                                          |
| `acceptedIP`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The IP address from which the terms of service were accepted.                                                            | 172.217.2.46                                                                                                             |
| `acceptedUserAgent`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The user-agent of the user making the request.                                                                           | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 |
| `acceptedDomain`                                                                                                         | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |