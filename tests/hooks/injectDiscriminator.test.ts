import { describe, expect, it } from "vitest";
import { _injectCreateTransferDiscriminator } from "../../src/hooks/custom/injectDiscriminator.js";
import { AsyncTransfer$inboundSchema } from "../../src/models/components/asynctransfer.js";
import { CreatedTransfer$inboundSchema } from "../../src/models/components/createdtransfer.js";
import { Transfer$inboundSchema } from "../../src/models/components/transfer.js";
import * as mockResponses from "../mocks/responses/createTransfer.js";

describe("injectCreateTransferDiscriminator", () => {
  it("should return original response if response data is not an object", async () => {
    // Arrange
    const mockResponse = new Response(JSON.stringify("not an object"), {
      status: 200,
      headers: [["Content-Type", "application/json"]],
    });

    // Act
    const result = await _injectCreateTransferDiscriminator(mockResponse);

    // Assert
    expect(result).toBe(mockResponse);
    expect(result.bodyUsed).toBe(false);
  });

  it("should return a response status of 200 and body of CreatedTransfer", async () => {
    // Arrange
    const mockResponse = new Response(mockResponses.MockCreatedTransfer, {
      status: 200,
      headers: [["Content-Type", "application/json"]],
    });

    // Act
    const result = await _injectCreateTransferDiscriminator(mockResponse);

    // Assert

    // Validate the response is not consumed
    expect(result.bodyUsed).toBe(false);
    const resultData = await result.json();

    // Validate the request is what it's suppose to be
    expect(resultData).toHaveProperty("_type");
    expect(resultData._type).toEqual("CreatedTransfer");
    expect(CreatedTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      true,
    );

    // Validate the request is not what it's not supposed to be
    expect(AsyncTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      false,
    );
    expect(Transfer$inboundSchema.safeParse(resultData).success).toEqual(false);
  });

  it("should return a response status of 200 and body of AsyncTransfer", async () => {
    // Arrange
    const mockResponse = new Response(mockResponses.MockAsyncTransfer, {
      status: 200,
      headers: [["Content-Type", "application/json"]],
    });

    // Act
    const result = await _injectCreateTransferDiscriminator(mockResponse);

    // Assert

    // Validate the response is not consumed
    expect(result.bodyUsed).toBe(false);
    const resultData = await result.json();

    // Validate the request is what it's suppose to be
    expect(resultData).toHaveProperty("_type");
    expect(resultData._type).toEqual("AsyncTransfer");
    expect(AsyncTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      true,
    );

    // Validate the request is not what it's not supposed to be
    expect(CreatedTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      false,
    );
    expect(Transfer$inboundSchema.safeParse(resultData).success).toEqual(false);
  });

  it("should return a response status of 201 and body of AsyncTransfer", async () => {
    // Arrange
    const mockResponse = new Response(mockResponses.MockAsyncTransfer, {
      status: 201,
      headers: [["Content-Type", "application/json"]],
    });

    // Act
    const result = await _injectCreateTransferDiscriminator(mockResponse);

    // Assert
    // Validate the response is not consumed
    expect(result.bodyUsed).toBe(false);
    const resultData = await result.json();

    // Validate the request is what it's suppose to be
    expect(resultData).toHaveProperty("_type");
    expect(resultData._type).toEqual("AsyncTransfer");
    expect(AsyncTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      true,
    );

    // Validate the request is not what it's not supposed to be
    expect(CreatedTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      false,
    );
    expect(Transfer$inboundSchema.safeParse(resultData).success).toEqual(false);
  });

  it("should return a response status of 202 and body of Transfer", async () => {
    // Arrange
    const mockResponse = new Response(mockResponses.MockTransfer, {
      status: 202,
      headers: [["Content-Type", "application/json"]],
    });

    // Act
    const result = await _injectCreateTransferDiscriminator(mockResponse);

    // Assert

    // Validate the response is not consumed
    expect(result.bodyUsed).toBe(false);
    const resultData = await result.json();

    // Validate the request is what it's suppose to be
    expect(resultData).toHaveProperty("_type");
    expect(resultData._type).toEqual("Transfer");
    expect(Transfer$inboundSchema.safeParse(resultData).success).toEqual(true);

    // Validate the request is not what it's not supposed to be
    expect(CreatedTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      false,
    );
    expect(AsyncTransfer$inboundSchema.safeParse(resultData).success).toEqual(
      false,
    );
  });
});
