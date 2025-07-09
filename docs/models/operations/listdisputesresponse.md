# ListDisputesResponse

## Example Usage

```typescript
import { ListDisputesResponse } from "@moovio/sdk/models/operations";

let value: ListDisputesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [
    {
      disputeID: "6e356108-fdfa-4910-bbe4-1e3c8abf5520",
      merchantAccountID: "34233b72-780c-4e0e-8b08-cbbe1bc878f8",
      amount: {
        currency: "USD",
        value: 257753,
      },
      networkReasonCode: "10.4",
      transfer: {
        transferID: "ecac148a-917e-4ee0-b46a-c51408939fff",
      },
      respondBy: new Date("2024-12-23T18:55:00Z"),
      status: "response-needed",
      phase: "chargeback",
      createdOn: new Date("2024-12-23T17:55:00Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Dispute](../../models/components/dispute.md)[] | :heavy_check_mark:                                         | N/A                                                        |