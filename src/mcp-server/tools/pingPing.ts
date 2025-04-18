/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { pingPing } from "../../funcs/pingPing.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PingRequest$inboundSchema,
};

export const tool$pingPing: ToolDefinition<typeof args> = {
  name: "ping-ping",
  description: `A simple endpoint to check auth.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/ping.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await pingPing(
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

    return formatResult(void 0, apiCall);
  },
};
