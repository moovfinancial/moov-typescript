# DepositAccountIngestedResponse

The result of ingesting a deposit account into the deposit view.

## Example Usage

```typescript
import { DepositAccountIngestedResponse } from "@moovio/sdk/models/components";

let value: DepositAccountIngestedResponse = {
  moovAccountID: "<id>",
  sourceSystem: "jh_coredirector",
  sourceAccountID: "<id>",
  ingestedAt: new Date("2025-05-09T16:16:06.585Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `moovAccountID`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The Moov account that owns the deposit view the account was ingested into.                    |
| `sourceSystem`                                                                                | [components.SourceSystem](../../models/components/sourcesystem.md)                            | :heavy_check_mark:                                                                            | The core banking source system that produced the ingested payload.                            |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The identifier of the deposit account within the source system.                               |
| `ingestedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the deposit account was ingested.                                           |