# TermsOfService

Describes the acceptance of the Terms of Service.

## Example Usage

```typescript
import { TermsOfService } from "@moovio/sdk/models/components";

let value: TermsOfService = {
  acceptedDate: new Date("2024-10-25T10:01:56.756Z"),
  acceptedIP: "172.217.2.46",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `acceptedDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the terms of service were accepted.                                         |                                                                                               |
| `acceptedIP`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The IP address from which the terms of service were accepted.                                 | 172.217.2.46                                                                                  |