// <copyright file='wdio.browserStack.base.ts' company='symplr'>
// Copyright © 2022 symplr. All rights reserved. Confidential and Proprietary.
// Copyright © 2022 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { masterconfig as sharedConfig } from "../wdio.master.conf";

export const browserStackBase: WebdriverIO.Config = {
  ...sharedConfig,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",

  capabilities: {
    webPortal: {
      capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        "bstack:options": {
          idleTimeout: 300,
          projectName: "ProjectName-Web-UI",
          buildName: process.env.BROWSERSTACK_BUILD_NAME,
          os: "Windows",
          osVersion: "10",
          local: true,
          localIdentifier: process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
        }
      }
    }
  }
};
