# TransferACHAddendaRecord

An addenda record which was added to an ACH transfer

## Example Usage

```typescript
import { TransferACHAddendaRecord } from "@moovio/sdk/models/components";

let value: TransferACHAddendaRecord = {
  record: "<value>",
  isMasked: false,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `record`                                                   | *string*                                                   | :heavy_check_mark:                                         | The ACH addenda record, which may have masked PII          |
| `isMasked`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | Flag indicating whether or not this record has been masked |