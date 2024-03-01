// <copyright file='wdio.local.chrome.conf.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { masterconfig as sharedConfig } from "./wdio.master.conf";

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  maxInstances: 5,

  logLevel: "info",
  capabilities: {
    webPortal: {
      capabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          'excludeSwitches': [ 'enable-automation' ],
          args: [
            "disable-infobars",
            "disable-popup-blocking",
            "disable-notifications",
          ],
          prefs: {
            "profile.managed_default_content_settings.popups": 2,
            "profile.managed_default_content_settings.notifications": 2,
          },
        },
        acceptInsecureCerts: true,
      },
    },
  },
};
