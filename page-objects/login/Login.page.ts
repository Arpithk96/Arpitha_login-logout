// <copyright file='Login.page.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { AppConfigDataProvider } from '../../configDataProvider/appConfigDataProvider';
import { BasePage } from '../base/Base.page ';
import { loginControls } from "./Login.controls";
import * as URLS from '../../config/appConfig.default.json'



class LoginPage extends BasePage {

  private appConfig: AppConfigDataProvider;

  constructor() {
    super();
  }

  public async LaunchApp(user: string = '') {
    await super.maximizeWindow();
    this.appConfig = new AppConfigDataProvider(user);
    await super.navigateTo(URLS.appUrl.qa.url);
    await super.clickElement(loginControls.usernameField)
    await super.enterText(loginControls.usernameField, this.appConfig.userLogin, 10)
    await super.isElementDisplayed(loginControls.passwordField);
    await super.enterText(loginControls.passwordField, this.appConfig.userPassword, 10);
    //expect(await super.getElementText(loginControls.loginButton)).to.contains(msg[0], `Login`)
    // expect(await requestsPage.getPartialTextFromPage(msg[0])).to.contains(msg[0], `ASSERTION ERROR: Message is not matching`);
    await super.clickElement(loginControls.loginButton, 200);


  };
  /* public async Location() {
     let btn1= $(#orgbtn);
     (await btn1).moveTo();
 
   }*/
 /* public async Myworklist() {
    await super.isElementExisting(loginControls.Myworklist);
  }*/
  public async InitiatePage() {
    await this.pause(4000)
    await super.clickElement(loginControls.symplrLogo, 500);
  };

  public async InitiateButton() {
    this.pause(2000)
    await super.getElementText(loginControls.Initiate, 30);
    await super.clickElement(loginControls.Initiate, 100);
    await browser.pause(2000)

  };

  public async Logout() {
    await super.hoverOverElement(loginControls.Logout, 100)
    await super.clickElement(loginControls.Logoutbtn)
  }

  public async Login() {
  await super.isElementDisplayed(loginControls.usernameField,100);
  }
  

};





export const loginPage = new LoginPage();
