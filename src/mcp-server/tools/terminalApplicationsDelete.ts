/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { terminalApplicationsDelete } from "../../funcs/terminalApplicationsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteTerminalApplicationRequest$inboundSchema,
};

export const tool$terminalApplicationsDelete: ToolDefinition<typeof args> = {
  name: "terminal-applications-delete",
  description: `Delete a specific terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/terminal-applications.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await terminalApplicationsDelete(
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
