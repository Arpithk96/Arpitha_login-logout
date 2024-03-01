// <copyright file='Login.controls.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls } from "../base/Base.controls";

class LoginControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for PoP up window for Microsoft authencation window
   */
  get usernameField() {
    return '//input[@id="username"]';
  }

  get passwordField() {
    return '//input[@id="password"]';
  }

  get loginButton() {
    return '//button[(text()= "Login")]';
  }

  get symplrLogo(){
    return '//a[@class="navbar-brand"]';
  
  }

  get Initiate(){
    return '//button[text()="Initiate New Workflow"]';
  }

  get orgbtn(){
    return '(//span[@class="text-truncate navbar-nav-org-item"])[1]';
  }
  get Myworklist(){
    return '//h6[text()="My Worklist  "]';
  }
get Logout(){
  return '//span[@class="fa fa-user-circle-o mr-2"]';
}
get Logoutbtn(){
  return '//a[text()="Logout"]';
}
  /*get verificationCodeField() {
    return '//\*[@id="Token"]';
  }

  get submitCode() {
    return '//\*[contains(text(), "Submit")]';
  }

  get scheduleMeetingBtn() {
    return '(//a[@href="https://www.symplr.com/demo-request"])[1]';
  }*/
}

export const loginControls = new LoginControls();