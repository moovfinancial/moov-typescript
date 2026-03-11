# ResolutionLink

A temporary, secure link sent to a merchant to resolve account requirements such as KYC verification or document uploads.

## Example Usage

```typescript
import { ResolutionLink } from "@moovio/sdk/models/components";

let value: ResolutionLink = {
  code: "bwebMOhZ85",
  accountID: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  partnerAccountID: "0d8e0d6e-e4a2-4f1b-8c3d-1b9e0f5a7c2d",
  recipient: "15555555555",
  url: "https://moov.link/r/bwebMOhZ85",
  createdOn: new Date("2026-07-01T12:00:00Z"),
  updatedOn: new Date("2026-07-01T12:00:00Z"),
  expiresOn: new Date("2026-07-08T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique nanoid identifier for the resolution link.                                           |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the merchant account this resolution link is associated with.                       |
| `partnerAccountID`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the partner account this resolution link is associated with.                        |
| `recipient`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The recipient contact information for the resolution link.                                    |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The URL of the resolution link.                                                               |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the resolution link was created.                                            |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the resolution link was last updated.                                       |
| `disabledOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resolution link was disabled, if applicable.                            |
| `expiresOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the resolution link expires.                                                |