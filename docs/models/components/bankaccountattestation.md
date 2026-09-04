# BankAccountAttestation

An attestation that a new authorization was obtained for a R29-errored bank account.

## Example Usage

```typescript
import { BankAccountAttestation } from "@moovio/sdk/models/components";

let value: BankAccountAttestation = {
  attestationID: "<id>",
  bankAccountID: "<id>",
  accountID: "<id>",
  createdOn: new Date("2026-05-19T14:30:00Z"),
  attestedAt: new Date("2026-05-15"),
  description: "reproachfully pivot and economise before coaxingly monocle",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attestationID`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the created attestation.                                                                |                                                                                               |
| `bankAccountID`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the bank account the attestation belongs to.                                            |                                                                                               |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the Moov account the bank account is linked to.                                         |                                                                                               |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp at which the attestation was created.                                               | 2026-05-19T14:30:00Z                                                                          |
| `attestedAt`                                                                                  | [Date](../../types/rfcdate.md)                                                                | :heavy_check_mark:                                                                            | Date on which new authorization was obtained from the receiver, formatted as YYYY-MM-DD.      | 2026-05-15                                                                                    |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Freeform text description describing how the authorization was obtained.                      |                                                                                               |