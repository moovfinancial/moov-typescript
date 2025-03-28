/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { endToEndEncryptionGenerateKey } from "../../funcs/endToEndEncryptionGenerateKey.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GenerateEndToEndKeyRequest$inboundSchema,
};

export const tool$endToEndEncryptionGenerateKey: ToolDefinition<typeof args> = {
  name: "end-to-end-encryption-generate-key",
  description:
    `Generates a public key used to create a JWE token for passing secure authentication data through non-PCI compliant intermediaries.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await endToEndEncryptionGenerateKey(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
