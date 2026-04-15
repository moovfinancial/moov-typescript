# BatchGetTransfersRequest

## Example Usage

```typescript
import { BatchGetTransfersRequest } from "@moovio/sdk/models/operations";

let value: BatchGetTransfersRequest = {
  accountID: "<id>",
  batchGetTransfersRequest: {
    transferIDs: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `accountID`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `batchGetTransfersRequest`                                                                 | [components.BatchGetTransfersRequest](../../models/components/batchgettransfersrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |