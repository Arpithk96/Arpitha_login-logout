// <copyright file='wdio.local.chrome.conf.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { masterconfig as sharedConfig } from "./wdio.master.conf";

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  maxInstances: 1,

  logLevel: "info",
  capabilities: {
    webPortal: {
      capabilities: {
        browserName: "MicrosoftEdge",
        browserVersion: "116.0.1938.62",
        acceptInsecureCerts: true,
      },
    },
  },
};
