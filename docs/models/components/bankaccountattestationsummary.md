# BankAccountAttestationSummary

A partner-visible summary of a bank account attestation.

## Example Usage

```typescript
import { BankAccountAttestationSummary } from "@moovio/sdk/models/components";

let value: BankAccountAttestationSummary = {
  attestationID: "<id>",
  description: "toe extricate selfishly ick digestive freely porter",
  createdOn: new Date("2026-05-19T14:30:00Z"),
  attestedAt: new Date("2026-05-15"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attestationID`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the attestation.                                                                        |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Freeform text description describing how the authorization was obtained.                      |                                                                                               |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp at which the attestation was created.                                               | 2026-05-19T14:30:00Z                                                                          |
| `attestedAt`                                                                                  | [Date](../../types/rfcdate.md)                                                                | :heavy_check_mark:                                                                            | Date on which new authorization was obtained from the receiver, formatted as YYYY-MM-DD.      | 2026-05-15                                                                                    |