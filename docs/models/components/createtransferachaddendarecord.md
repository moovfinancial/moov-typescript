# CreateTransferACHAddendaRecord

An addenda record to be added to an ACH transfer

## Example Usage

```typescript
import { CreateTransferACHAddendaRecord } from "@moovio/sdk/models/components";

let value: CreateTransferACHAddendaRecord = {
  record: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `record`                                                             | *string*                                                             | :heavy_check_mark:                                                   | The raw ACH addenda record. Must only contain valid NACHA characters |