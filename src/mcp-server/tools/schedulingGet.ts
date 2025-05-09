/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { schedulingGet } from "../../funcs/schedulingGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetSchedulesRequest$inboundSchema,
};

export const tool$schedulingGet: ToolDefinition<typeof args> = {
  name: "scheduling-get",
  description:
    `Describes a schedule associated with an account. Requires at least 1 occurrence or recurTransfer to be specified.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/transfers.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await schedulingGet(
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
