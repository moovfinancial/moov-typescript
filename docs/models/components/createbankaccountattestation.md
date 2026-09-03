# CreateBankAccountAttestation

Request body for creating a R29 re-authorization attestation for an errored bank account.

## Example Usage

```typescript
import { CreateBankAccountAttestation } from "@moovio/sdk/models/components";

let value: CreateBankAccountAttestation = {
  attestedAt: new Date("2026-05-15"),
  description: "beneath scotch spellcheck waft rise pocket-watch",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `attestedAt`                                                                             | [Date](../../types/rfcdate.md)                                                           | :heavy_check_mark:                                                                       | Date on which new authorization was obtained from the receiver, formatted as YYYY-MM-DD. | 2026-05-15                                                                               |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | Freeform text description describing how the authorization was obtained.                 |                                                                                          |