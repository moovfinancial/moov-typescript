# BankAccountAttestationEligibility

Whether a bank account is currently eligible to receive a new attestation.

## Example Usage

```typescript
import { BankAccountAttestationEligibility } from "@moovio/sdk/models/components";

let value: BankAccountAttestationEligibility = {
  enabled: true,
  eligible: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether the calling account is allowlisted for the attestations feature. When `false`, `eligible` is always `false`. |
| `eligible`                                                                                                           | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether the bank account currently meets the requirements to receive a new attestation.                              |