# DocumentType

Types of documents that can be uploaded.

## Example Usage

```typescript
import { DocumentType } from "@moovio/sdk/models/components";

let value: DocumentType = "bankStatement";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"driversLicense" | "passport" | "utilityBill" | "bankStatement" | Unrecognized<string>
```