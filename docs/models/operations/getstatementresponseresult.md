# GetStatementResponseResult


## Supported Types

### `components.Statement`

```typescript
const value: components.Statement = {
  statementID: "<id>",
  statementName: "<value>",
  fileName: "example.file",
  fileSize: 353676,
  billingPeriodStartDateTime: new Date("2025-02-23T14:24:09.014Z"),
  billingPeriodEndDateTime: new Date("2026-06-27T04:23:41.659Z"),
  subscriptionIDs: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  summary: {
    cardAcquiring: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      interchangeFees: {
        visa: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        mastercard: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        discover: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        americanExpress: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    },
    ach: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    instantPayments: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    accountFees: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    otherCardFees: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncomeSubtotal: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    residualSubtotal: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    monthlyPartnerCosts: {
      minimumCommitment: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      monthlyPlatform: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      total: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    netPartnerPayment: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  cardAcquiringFees: {
    visa: {
      interchange: {
        count: 47399,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      interchangePrograms: [
        {
          programName: "<value>",
          count: 474428,
          percentageRate: new Decimal("5621.1"),
          perItemRate: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          total: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          transferVolume: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        },
      ],
      networkPassthrough: {
        count: 116027,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticOnline: {
        count: 418959,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticInPerson: {
        count: 778418,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalOnline: {
        count: 921238,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalInPerson: {
        count: 271021,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      declines: {
        count: 367368,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      refunds: {
        count: 539173,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      total: {
        count: 172473,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    },
    mastercard: {
      interchange: {
        count: 47399,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      interchangePrograms: [
        {
          programName: "<value>",
          count: 474428,
          percentageRate: new Decimal("5621.1"),
          perItemRate: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          total: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          transferVolume: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        },
      ],
      networkPassthrough: {
        count: 116027,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticOnline: {
        count: 418959,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticInPerson: {
        count: 778418,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalOnline: {
        count: 921238,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalInPerson: {
        count: 271021,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      declines: {
        count: 367368,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      refunds: {
        count: 539173,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      total: {
        count: 172473,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    },
    discover: {
      interchange: {
        count: 47399,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      interchangePrograms: [
        {
          programName: "<value>",
          count: 474428,
          percentageRate: new Decimal("5621.1"),
          perItemRate: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          total: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          transferVolume: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        },
      ],
      networkPassthrough: {
        count: 116027,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticOnline: {
        count: 418959,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticInPerson: {
        count: 778418,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalOnline: {
        count: 921238,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalInPerson: {
        count: 271021,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      declines: {
        count: 367368,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      refunds: {
        count: 539173,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      total: {
        count: 172473,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    },
    americanExpress: {
      interchange: {
        count: 47399,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      interchangePrograms: [
        {
          programName: "<value>",
          count: 474428,
          percentageRate: new Decimal("5621.1"),
          perItemRate: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          total: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          transferVolume: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        },
      ],
      networkPassthrough: {
        count: 116027,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticOnline: {
        count: 418959,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedDomesticInPerson: {
        count: 778418,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalOnline: {
        count: 921238,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      completedInternationalInPerson: {
        count: 271021,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      declines: {
        count: 367368,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      refunds: {
        count: 539173,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
      total: {
        count: 172473,
        amount: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    },
  },
  achFees: {
    standardCredit: {
      count: 429311,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    sameDayCredit: {
      count: 641426,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    debits: {
      count: 243742,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    return: {
      count: 174053,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    unauthorizedReturn: {
      count: 532273,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    noticeOfChange: {
      count: 360465,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    bankAccountVerification: {
      count: 975255,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 172473,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  instantPaymentFees: {
    rtpCreditTransaction: {
      count: 163873,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    rtpDecline: {
      count: 519146,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pushToCardTransaction: {
      count: 200161,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pushToCardDecline: {
      count: 269601,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pullFromCardTransaction: {
      count: 899791,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pullFromCardDecline: {
      count: 808278,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pullFromCardRefund: {
      count: 487513,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    instantVerification: {
      count: 553308,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 172473,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  accountFees: {
    walletFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantPCIFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    invoicePaymentFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    kybFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    kycFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    transactionMonitoringFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  otherCardFees: {
    disputes: {
      count: 14483,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    cardAccountUpdater: {
      count: 788385,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    cardVerification: {
      count: 558564,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    nameVerification: {
      count: 423830,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 172473,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  partnerFees: {
    minimumCommitment: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    monthlyPlatform: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  createdOn: new Date("2024-12-16T22:14:29.585Z"),
  updatedOn: new Date("2026-08-11T11:14:26.652Z"),
};
```

### `ReadableStream<Uint8Array>`

```typescript
const value: ReadableStream<Uint8Array> = await openAsBlob("example.file");
```

