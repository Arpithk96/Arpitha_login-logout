// <copyright file='time-out' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { Given, Then, When } from "@wdio/cucumber-framework";
import { loginPage } from "../../page-objects/login/Login.page";


Given('the user {string} launches the app', async (user) => {
  await loginPage.LaunchApp(user);
});


/*When('I change to the {string} organization in the Menu Bar', async() =>{
  await loginPage.Location();
});*/

Then('I navigate to the Initiate Workflow screen', async () => {
  await loginPage.InitiatePage();
});


When('Click on Initiate button', async () => {
  await loginPage.InitiateButton();
});

When('Click on logout button', async() => {
  await loginPage.Logout();
});

 Then('I should see the login page', async() =>{
  await loginPage.Login();
 });