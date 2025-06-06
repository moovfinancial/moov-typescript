# WireServices

## Example Usage

```typescript
import { WireServices } from "@moovio/sdk/models/components";

let value: WireServices = {
  fundsTransferStatus: true,
  fundsSettlementOnlyStatus: false,
  bookEntrySecuritiesTransferStatus: false,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `fundsTransferStatus`                                                     | *boolean*                                                                 | :heavy_check_mark:                                                        | The institution's capability to process standard Fedwire funds transfers. | true                                                                      |
| `fundsSettlementOnlyStatus`                                               | *boolean*                                                                 | :heavy_check_mark:                                                        | The institution's capability for settlement-only transfers.               | false                                                                     |
| `bookEntrySecuritiesTransferStatus`                                       | *boolean*                                                                 | :heavy_check_mark:                                                        | The institution's capability to handle transfers of securities.           | false                                                                     |