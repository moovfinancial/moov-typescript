# DocumentType

Types of documents that can be uploaded.

## Example Usage

```typescript
import { DocumentType } from "@moovio/sdk/models/components";

let value: DocumentType = "bankStatement";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"driversLicense" | "passport" | "utilityBill" | "bankStatement" | Unrecognized<string>
```