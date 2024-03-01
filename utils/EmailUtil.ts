// <copyright file='EmailReader.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>
const { ImapFlow } = require('imapflow');

let imapConfig;

export class EmailUtil {
  constructor(username: string, password: string) {
    imapConfig = {
      host: this.getDomainServer(username),
      port: 993,
      secure: true,
      auth: {
        user: username,
        pass: password,
      }
    }
  }

  /**
   * Returns email domain server name based on given userEmail.
   *
   * @param userEmail user email.
   * @returns email domain server name.
   */
  getDomainServer(userEmail: string) {
    if(userEmail.includes("@outlook") || (userEmail.includes("@hotmail"))) {
      return 'outlook.office365.com';
    }
    else if(userEmail.includes("@gmail")) {
      return 'imap.gmail.com';
    }
  }

  /**
   * Gets most recent email (based on the current class instance) and returns padlock OTP.
   *
   * @returns padlock authentication code.
   */
  async getPadlockAuthCode() {
    let lock;
    let client;
    let otp;
    try {

      // Connect to mail server.
      client = new ImapFlow(imapConfig);
      await client.connect();

      // Acquire lock on mail inbox.
      lock = await client.getMailboxLock('INBOX');
      let message = await client.fetchOne('*', {source: true, headers: true})
      
      // Get message source.
      let response = message.source.toString();

      // Extract OTP from mail body.
      let body = response.match(/Standalone account.([^Please enter this code]+)/)[1].toString();
      otp = body.replace(/<\/?[^>]+(>|$)/g, "");
    }
    catch(ex) {
      console.log(ex);
    }
    finally {
      // Release lock and logout.
      lock.release();
      client.logout();

      // Return OTP if undefined.
      if(otp != undefined) {
        return otp;
      }
    }
  }
}