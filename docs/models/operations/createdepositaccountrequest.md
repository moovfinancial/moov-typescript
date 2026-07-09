# CreateDepositAccountRequest

## Example Usage

```typescript
import { CreateDepositAccountRequest } from "@moovio/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `accountID`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `xSourceSystem`                                                           | [components.SourceSystem](../../models/components/sourcesystem.md)        | :heavy_check_mark:                                                        | Identifies the core banking source system that produced the request body. |
| `requestBody`                                                             | *ReadableStream<Uint8Array>*                                              | :heavy_check_mark:                                                        | N/A                                                                       |