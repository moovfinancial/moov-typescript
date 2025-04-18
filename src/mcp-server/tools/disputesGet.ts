/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { disputesGet } from "../../funcs/disputesGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetDisputeRequest$inboundSchema,
};

export const tool$disputesGet: ToolDefinition<typeof args> = {
  name: "disputes-get",
  description: `Get a dispute by ID. 

Read our [disputes guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/disputes/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/transfers.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await disputesGet(
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
