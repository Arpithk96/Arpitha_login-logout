import { appEnvironment } from '../config/wdio.master.conf';

const appConfig = require(`../config/appConfig.${appEnvironment}.json`);

export class AppConfigDataProvider {
  private AppUrl: string;
  private email: string;
  private Password: string;

  /**
   * Constructor takes user as parameter to initalize.
   * Initializes AppUrl, Login and Password properties.
   *
   * @param user
   */
  constructor(user?: string) {
    this.AppUrl = appConfig["appUrl"];
    if (user !== undefined) {
      if (appConfig["users"][user] !== undefined) {
        this.email = appConfig["users"][user].email;
        this.Password = appConfig["users"][user].password;
      } else {
        throw new Error(`Cannot find user credentials for user : ${user}`);
      }
    }
  }

  /**
   * Gets the App url
   *
   * @returns App Url
   */
  public get appUrl(): string {
    return this.AppUrl;
  }

  /**
   * Gets the UserName
   * @returns userName to login to app
   */
  public get userLogin(): string {
    return this.email;
  }

  /**
   * Gets the password
   * @returns password to login to app
   */
  public get userPassword(): string {
    return this.Password;
  }
}
