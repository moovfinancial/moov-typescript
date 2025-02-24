/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TerminalApplicationPlatform,
  TerminalApplicationPlatform$inboundSchema,
  TerminalApplicationPlatform$outboundSchema,
} from "./terminalapplicationplatform.js";
import {
  TerminalApplicationStatus,
  TerminalApplicationStatus$inboundSchema,
  TerminalApplicationStatus$outboundSchema,
} from "./terminalapplicationstatus.js";

/**
 * Describes a terminal application.
 */
export type TerminalApplication = {
  /**
   * ID of the terminal application.
   */
  terminalApplicationID: string;
  /**
   * Status of the terminal application.
   */
  status: TerminalApplicationStatus;
  /**
   * Platform of the terminal application.
   */
  platform: TerminalApplicationPlatform;
  /**
   * The app bundle identifier of the terminal application. Will be returned if platform is ios.
   */
  appBundleID?: string | undefined;
  /**
   * The app package name of the terminal application. Will be returned if platform is android.
   */
  packageName?: string | undefined;
  /**
   * The app version of the terminal application Will be returned if platform is android.
   */
  sha256Digest?: string | undefined;
  /**
   * The app version of the terminal application Will be returned if platform is android.
   */
  versionCode?: string | undefined;
};

/** @internal */
export const TerminalApplication$inboundSchema: z.ZodType<
  TerminalApplication,
  z.ZodTypeDef,
  unknown
> = z.object({
  terminalApplicationID: z.string(),
  status: TerminalApplicationStatus$inboundSchema,
  platform: TerminalApplicationPlatform$inboundSchema,
  appBundleID: z.string().optional(),
  packageName: z.string().optional(),
  sha256Digest: z.string().optional(),
  versionCode: z.string().optional(),
});

/** @internal */
export type TerminalApplication$Outbound = {
  terminalApplicationID: string;
  status: string;
  platform: string;
  appBundleID?: string | undefined;
  packageName?: string | undefined;
  sha256Digest?: string | undefined;
  versionCode?: string | undefined;
};

/** @internal */
export const TerminalApplication$outboundSchema: z.ZodType<
  TerminalApplication$Outbound,
  z.ZodTypeDef,
  TerminalApplication
> = z.object({
  terminalApplicationID: z.string(),
  status: TerminalApplicationStatus$outboundSchema,
  platform: TerminalApplicationPlatform$outboundSchema,
  appBundleID: z.string().optional(),
  packageName: z.string().optional(),
  sha256Digest: z.string().optional(),
  versionCode: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TerminalApplication$ {
  /** @deprecated use `TerminalApplication$inboundSchema` instead. */
  export const inboundSchema = TerminalApplication$inboundSchema;
  /** @deprecated use `TerminalApplication$outboundSchema` instead. */
  export const outboundSchema = TerminalApplication$outboundSchema;
  /** @deprecated use `TerminalApplication$Outbound` instead. */
  export type Outbound = TerminalApplication$Outbound;
}

export function terminalApplicationToJSON(
  terminalApplication: TerminalApplication,
): string {
  return JSON.stringify(
    TerminalApplication$outboundSchema.parse(terminalApplication),
  );
}

export function terminalApplicationFromJSON(
  jsonString: string,
): SafeParseResult<TerminalApplication, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TerminalApplication$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TerminalApplication' from JSON`,
  );
}
