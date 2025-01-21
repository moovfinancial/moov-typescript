# CreateTransferResponseBody

The request completed successfully.


## Supported Types

### `components.Transfer`

```typescript
const value: components.Transfer = {
  transferID: "802a797e-dffb-40f7-a0f9-7062b080bf01",
  createdOn: new Date("2025-12-12T18:40:59.500Z"),
  source: {
    paymentMethodID: "<id>",
    paymentMethodType: "<value>",
    account: {
      accountID: "<id>",
      email: "Levi.Walter@yahoo.com",
      displayName: "Quinton.Kutch85",
    },
    bankAccount: {
      bankAccountID: "833fa3ef-14d3-4c97-ba45-6af66f739832",
      fingerprint:
        "dd4cbfe5fbaf47b392770b5b595bec604fd99394749b7d017153e2b9cfbea40e",
      status: "new",
      holderName: "John Doe",
      holderType: "individual",
      bankName: "Gringotts Bank",
      bankAccountType: "checking",
      routingNumber: "123456780",
      lastFourAccountNumber: "6789",
      updatedOn: new Date("2024-11-26T22:37:06Z"),
      statusReason: "bank-account-created",
    },
    cardDetails: {
      status: "settled",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
    achDetails: {
      status: "corrected",
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
  },
  destination: {
    paymentMethodID: "<id>",
    paymentMethodType: "<value>",
    account: {
      accountID: "<id>",
      email: "Hardy44@gmail.com",
      displayName: "Marcelina97",
    },
    bankAccount: {
      bankAccountID: "833fa3ef-14d3-4c97-ba45-6af66f739832",
      fingerprint:
        "dd4cbfe5fbaf47b392770b5b595bec604fd99394749b7d017153e2b9cfbea40e",
      status: "new",
      holderName: "John Doe",
      holderType: "individual",
      bankName: "Gringotts Bank",
      bankAccountType: "checking",
      routingNumber: "123456780",
      lastFourAccountNumber: "6789",
      updatedOn: new Date("2024-11-26T22:37:06Z"),
      statusReason: "bank-account-created",
    },
    achDetails: {
      status: "initiated",
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
    cardDetails: {
      status: "confirmed",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
  },
  status: "created",
  amount: {
    currency: "Rupiah",
    value: 822685,
  },
  description: "Pay Instructor for May 15 Class",
  metadata: {
    "optional": "metadata",
  },
  facilitatorFee: {
    totalDecimal: "12.987654321",
    markupDecimal: "0.987654321",
  },
};
```

### `components.AsyncTransfer`

```typescript
const value: components.AsyncTransfer = {
  transferID: "1249fd3b-87e9-422e-b12a-3d6720c1a884",
  createdOn: new Date("2024-03-15T01:44:19.880Z"),
};
```

