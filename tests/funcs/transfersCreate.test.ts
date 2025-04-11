import { afterEach, describe, expect, test, vitest } from "vitest";
import { MoovCore } from "../../src/core.js";
import { transfersCreate } from "../../src/funcs/transfersCreate.js";
import * as mockResponses from "../mocks/responses/createTransfer.js";
import { CreateTransferResponseType } from "../../src/models/components/createtransferresponsetype.js";
import * as operations from "../../src/models/operations/index.js";

describe("transfersCreate", () => {
  const client = new MoovCore();

  const mockRequest: operations.CreateTransferRequest = {
    accountID: "acc_123",
    xIdempotencyKey: "idem_123",
    createTransfer: {
      source: {},
      destination: {
        paymentMethodID: "pm_123",
      },
      amount: {
        value: 0,
        currency: "USD",
      },
    },
  };

  afterEach(() => {
    vitest.clearAllMocks();
  });

  test("handles status code 200 with response body of CreatedTransfer", async () => {
    global.fetch = vitest.fn<typeof fetch>().mockResolvedValue(
      new Response(mockResponses.MockCreatedTransfer, {
        status: 200,
        headers: [["Content-Type", "application/json"]],
      }),
    );

    const result = await transfersCreate(client, mockRequest);

    expect(result.ok).toBe(true);
    expect(result.value?.result.type).toBe(
      CreateTransferResponseType.CreatedTransfer,
    );
  });

  test("handles status code 200 with response body of AsyncTransfer", async () => {
    global.fetch = vitest.fn<typeof fetch>().mockResolvedValue(
      new Response(mockResponses.MockAsyncTransfer, {
        status: 200,
        headers: [["Content-Type", "application/json"]],
      }),
    );

    const result = await transfersCreate(client, mockRequest);

    expect(result.ok).toBe(true);
    expect(result.value?.result.type).toBe(
      CreateTransferResponseType.AsyncTransfer,
    );
  });

  test("handles status code 201 with response body of AsyncTransfer", async () => {
    global.fetch = vitest.fn<typeof fetch>().mockResolvedValue(
      new Response(mockResponses.MockAsyncTransfer, {
        status: 201,
        headers: [["Content-Type", "application/json"]],
      }),
    );

    const result = await transfersCreate(client, mockRequest);

    expect(result.ok).toBe(true);
    expect(result.value?.result.type).toBe(
      CreateTransferResponseType.AsyncTransfer,
    );
  });

  test("handles status code 202 with response body of Transfer", async () => {
    global.fetch = vitest.fn<typeof fetch>().mockResolvedValue(
      new Response(mockResponses.MockTransfer, {
        status: 202,
        headers: [["Content-Type", "application/json"]],
      }),
    );

    const result = await transfersCreate(client, mockRequest);

    expect(result.ok).toBe(true);
    expect(result.value?.result.type).toBe(CreateTransferResponseType.Transfer);
  });
});
