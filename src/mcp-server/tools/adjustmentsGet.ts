/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adjustmentsGet } from "../../funcs/adjustmentsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAdjustmentRequest$inboundSchema,
};

export const tool$adjustmentsGet: ToolDefinition<typeof args> = {
  name: "adjustments-get",
  description: `Retrieve a specific adjustment associated with a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/wallets.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adjustmentsGet(
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
