# GetCaptureResponse

## Example Usage

```typescript
import { GetCaptureResponse } from "@moovio/sdk/models/operations";

let value: GetCaptureResponse = {
  headers: {},
  result: {
    captureID: "<id>",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    isFinal: true,
    status: "completed",
    createdOn: new Date("2024-02-18T07:44:09.783Z"),
    destinationPaymentMethodID: "<id>",
    description: "Pay Instructor for May 15 Class",
    metadata: {
      "optional": "metadata",
    },
    lineItems: {
      items: [
        {
          name: "<value>",
          basePrice: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          quantity: 459250,
          options: [
            {
              name: "<value>",
              quantity: 129124,
              priceModifier: {
                currency: "USD",
                valueDecimal: "12.987654321",
              },
              images: [
                {
                  imageID: "<id>",
                  link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                  publicID: "<id>",
                },
              ],
            },
          ],
          images: [
            {
              imageID: "<id>",
              link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
              publicID: "<id>",
            },
          ],
        },
      ],
    },
    amountDetails: {
      tip: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      tax: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      surcharge: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    facilitatorFeeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Capture](../../models/components/capture.md) | :heavy_check_mark:                                       | N/A                                                      |