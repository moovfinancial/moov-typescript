# CreateTransferResponse


## Supported Types

### `operations.CreateTransferResponseBody`

```typescript
const value: operations.CreateTransferResponseBody = {
  transferID: "0593b178-d108-4290-9762-771ae9abef7f",
  createdOn: new Date("2025-03-08T11:58:07.925Z"),
  source: {
    paymentMethodID: "<id>",
    paymentMethodType: "<value>",
    account: {
      accountID: "<id>",
      email: "Aglae.Torp40@hotmail.com",
      displayName: "Nedra63",
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
      status: "initiated",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
    achDetails: {
      status: "initiated",
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
      email: "Ima.Abbott@hotmail.com",
      displayName: "Robbie.VonRueden",
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
      status: "corrected",
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
    cardDetails: {
      status: "settled",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
  },
  status: "reversed",
  amount: {
    currency: "Azerbaijanian Manat",
    value: 617530,
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
  transferID: "26e23604-179b-4e7a-a07d-9617e186c22b",
  createdOn: new Date("2024-07-21T09:07:41.522Z"),
};
```

### `components.Transfer`

```typescript
const value: components.Transfer = {
  transferID: "0dfaeca5-1077-4603-b209-121ce1994961",
  createdOn: new Date("2025-01-13T18:49:36.050Z"),
  source: {
    paymentMethodID: "<id>",
    paymentMethodType: "<value>",
    account: {
      accountID: "<id>",
      email: "Camille_Johnston68@hotmail.com",
      displayName: "Alexandro.Ratke",
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
      status: "failed",
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
      email: "Dagmar_Wuckert0@gmail.com",
      displayName: "Dangelo87",
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
      status: "corrected",
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
    cardDetails: {
      status: "failed",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
  },
  status: "pending",
  amount: {
    currency: "Swiss Franc",
    value: 976295,
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

