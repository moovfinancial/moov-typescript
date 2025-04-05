# Scheduling
(*scheduling*)

## Overview

### Available Operations

* [create](#create) - Describes the schedule to create or modify.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
* [list](#list) - Describes a list of schedules associated with an account. Append the `hydrate=accounts` query parameter to include partial account details in the response.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
* [update](#update) - Describes the schedule to modify.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
* [get](#get) - Describes a schedule associated with an account. Requires at least 1 occurrence or recurTransfer to be specified.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
* [cancel](#cancel) - Describes the schedule to cancel.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
* [getOccurrance](#getoccurrance) - Gets a specific occurrence.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

## create

Describes the schedule to create or modify.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.scheduling.create({
    accountID: "9ab418fe-7b54-4964-a372-69b08e55ee8a",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "delightfully fumigate convection though zowie up bulky electronics",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "tackle unabashedly mentor early miserly stealthily without",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "USD",
            value: 1204,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "via deeply writ amid pupil yawningly wasabi when excepting councilman",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { schedulingCreate } from "@moovio/sdk/funcs/schedulingCreate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await schedulingCreate(moov, {
    accountID: "9ab418fe-7b54-4964-a372-69b08e55ee8a",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "delightfully fumigate convection though zowie up bulky electronics",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "tackle unabashedly mentor early miserly stealthily without",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "USD",
            value: 1204,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "via deeply writ amid pupil yawningly wasabi when excepting councilman",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateScheduleRequest](../../models/operations/createschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateScheduleResponse](../../models/operations/createscheduleresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400, 409                       | application/json               |
| errors.ScheduleValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## list

Describes a list of schedules associated with an account. Append the `hydrate=accounts` query parameter to include partial account details in the response.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.scheduling.list({
    skip: 60,
    count: 20,
    accountID: "c8a232aa-0b11-4b8a-b005-71e9e705d0e6",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { schedulingList } from "@moovio/sdk/funcs/schedulingList.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await schedulingList(moov, {
    skip: 60,
    count: 20,
    accountID: "c8a232aa-0b11-4b8a-b005-71e9e705d0e6",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSchedulesRequest](../../models/operations/listschedulesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSchedulesResponse](../../models/operations/listschedulesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Describes the schedule to modify.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.scheduling.update({
    accountID: "916f66c9-4a48-4a10-94fb-c5837b3ed84e",
    scheduleID: "ce88be33-c224-42c1-ae8b-3533cc7b3742",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "technician eulogise whereas till mild than during",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "gosh frantically belabor past",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "perfumed fisherman with",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "USD",
            value: 1204,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "hydrolyze lazily whenever how what",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { schedulingUpdate } from "@moovio/sdk/funcs/schedulingUpdate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await schedulingUpdate(moov, {
    accountID: "916f66c9-4a48-4a10-94fb-c5837b3ed84e",
    scheduleID: "ce88be33-c224-42c1-ae8b-3533cc7b3742",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "technician eulogise whereas till mild than during",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "gosh frantically belabor past",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "USD",
              value: 1204,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "perfumed fisherman with",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "USD",
            value: 1204,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "hydrolyze lazily whenever how what",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScheduleRequest](../../models/operations/updateschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateScheduleResponse](../../models/operations/updatescheduleresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400, 409                       | application/json               |
| errors.ScheduleValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## get

Describes a schedule associated with an account. Requires at least 1 occurrence or recurTransfer to be specified.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.scheduling.get({
    accountID: "b888f774-3e7c-4135-a18c-6b985523c4bc",
    scheduleID: "e50f7622-81da-484b-9c66-1c8a99c6b71b",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { schedulingGet } from "@moovio/sdk/funcs/schedulingGet.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await schedulingGet(moov, {
    accountID: "b888f774-3e7c-4135-a18c-6b985523c4bc",
    scheduleID: "e50f7622-81da-484b-9c66-1c8a99c6b71b",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSchedulesRequest](../../models/operations/getschedulesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSchedulesResponse](../../models/operations/getschedulesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## cancel

Describes the schedule to cancel.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.scheduling.cancel({
    accountID: "0f713502-9233-41c6-9ebd-c570b7edb496",
    scheduleID: "d50fbe4e-3e32-4613-8574-4d82f3fd6b3c",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { schedulingCancel } from "@moovio/sdk/funcs/schedulingCancel.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await schedulingCancel(moov, {
    accountID: "0f713502-9233-41c6-9ebd-c570b7edb496",
    scheduleID: "d50fbe4e-3e32-4613-8574-4d82f3fd6b3c",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelScheduleRequest](../../models/operations/cancelschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelScheduleResponse](../../models/operations/cancelscheduleresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getOccurrance

Gets a specific occurrence.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.scheduling.getOccurrance({
    accountID: "cdeb0c02-04f9-4e60-9768-3c10a2b2201d",
    scheduleID: "47a51a3b-df1e-40c5-8048-918f18949779",
    occurrenceFilter: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { schedulingGetOccurrance } from "@moovio/sdk/funcs/schedulingGetOccurrance.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await schedulingGetOccurrance(moov, {
    accountID: "cdeb0c02-04f9-4e60-9768-3c10a2b2201d",
    scheduleID: "47a51a3b-df1e-40c5-8048-918f18949779",
    occurrenceFilter: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScheduledOccurrenceRequest](../../models/operations/getscheduledoccurrencerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetScheduledOccurrenceResponse](../../models/operations/getscheduledoccurrenceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |