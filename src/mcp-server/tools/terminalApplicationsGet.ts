/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { terminalApplicationsGet } from "../../funcs/terminalApplicationsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTerminalApplicationRequest$inboundSchema,
};

export const tool$terminalApplicationsGet: ToolDefinition<typeof args> = {
  name: "terminal-applications-get",
  description: `Fetch a specific terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/terminal-applications.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await terminalApplicationsGet(
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
