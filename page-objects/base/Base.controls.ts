// <copyright file='Base.controls.ts' company='symplr'>
// Copyright © 2022 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

/**
 * Placeholder text for replacement
 */
export const locatorsPlaceHolder = "_PLACEHOLDER_";

/**
 * All controls should inherit this class
 */
export class BaseControls {
  /**
   * Gets the locator by normalizing the placeholder
   *
   * @param locator with placeholder
   * @param value that needs to be replace the place holder
   * @returns the formatted locator
   */
  protected getLocator(locator: string, value: string): string {
    locator = locator.replace(locatorsPlaceHolder, value);
    return locator;
  }

  /**
   * To find a locator by partial text
   * @param value partial text value
   */
  protected textPartialXpath(value: string): string {
    return "//*[contains(text()," + '"' + value + '")]';
  }
}
