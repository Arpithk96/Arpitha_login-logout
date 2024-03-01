// <copyright file='wdio.win10.chrome.conf.ts' company='symplr'>
// Copyright © 2022 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { browserStackBase } from "./wdio.browserstack.base";

export const config: WebdriverIO.Config = {
  ...browserStackBase,

  maxInstances: process.env.BS_MAX_INSTANCES ? +process.env.BS_MAX_INSTANCES : 10,
  logLevel: "info",
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
        }
      }
    }
  }
};
