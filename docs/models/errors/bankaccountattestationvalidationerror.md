# BankAccountAttestationValidationError

Describes which fields of a bank account attestation request failed validation.

## Example Usage

```typescript
import { BankAccountAttestationValidationError } from "@moovio/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `attestedAt`                                                                                                           | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Populated when `attestedAt` is missing, malformed, before the bank account's most recent R29 return, or a future date. |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Populated when `description` is missing or exceeds the maximum length.                                                 |