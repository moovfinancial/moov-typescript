# Document

## Example Usage

```typescript
import { Document } from "@moovio/sdk/models/components";

let value: Document = {
  documentID: "e07e83e8-9429-4e99-ac99-c941f719eb39",
  type: "bankStatement",
  contentType: "application/pdf",
  uploadedAt: new Date("2024-05-06T12:20:38.184Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `documentID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | e07e83e8-9429-4e99-ac99-c941f719eb39                                                          |
| `type`                                                                                        | [components.DocumentType](../../models/components/documenttype.md)                            | :heavy_check_mark:                                                                            | Types of documents that can be uploaded.                                                      | bankStatement                                                                                 |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The document's MIME type.                                                                     | application/pdf                                                                               |
| `parseErrors`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Optional array of errors encountered during automated parsing.                                |                                                                                               |
| `uploadedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-05-06T12:20:38.184Z                                                                      |