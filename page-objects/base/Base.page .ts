// Copyright © 2023 COE Team, symplr - All Rights Reserved.
// Unauthorized copying of this file, via any medium is strictly prohibited.
// Author - Prasanth R (COE Team).

import allureReporter from '@wdio/allure-reporter'
import { TIME_OUT } from './Timeout.enum';

export class BasePage {

    protected driverObj;

    constructor() {

    }

    async findElement(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        const element = await $(elementLocator);
        await element.waitForExist({
            timeout: timeout
        });
        return element;
    }

    async findElements(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        const elements = await $$(elementLocator);
        await elements[0].waitForExist({
            timeout: timeout
        });
        return elements;
    }

    async enterText(elementLocator: string, textToEnter: string, timeout: number = TIME_OUT.xxxl) {
        const element = await this.findElement(elementLocator, timeout);
        await this.waitTillElementClickable(elementLocator);
        return await element.setValue(textToEnter);
    }

    async waitTillElementClickable(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        await $(elementLocator).waitForClickable({
            timeout: timeout
        });
    }

    async waitTillElementDisplayed(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        
        await $(elementLocator).waitForDisplayed({
            timeout
        })
        
    }
    
    async isElementDisplayed(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        try {
            await $(elementLocator).waitForDisplayed({ timeout })
            return true;
        }
        catch (err) {
            return false;
        }

    }


    async getElementText(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        const element = await this.findElement(elementLocator, timeout);
        await this.waitTillElementDisplayed(elementLocator)
        return await element.getText();
    }

    async pause(millisecondsToPause: number) {
        await browser.pause(millisecondsToPause);
    }

    async clickElement(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        const element = await this.findElement(elementLocator, timeout);
        try {
            await this.waitTillElementClickable(elementLocator, timeout);
        }
        catch (ex) {
            await this.waitTillElementDisplayed(elementLocator, timeout);
        }

        // To capture screenshot before click event. This helps capture page state changes due to click events.
        await allureReporter.addStep('', {
            content: Buffer.from(await browser.takeScreenshot(), 'base64'),
            name: 'Screenshot',
            type: 'image/png'
        });

        return await element.click();
    }

    async navigateTo(url: string) {
        await browser.url(url);
        await this.waitTillPageLoads();
    }

    async maximizeWindow() {
        await browser.maximizeWindow();
    }

    async switchToTabByUrl(url: string) {
        await browser.pause(3000);
        await browser.switchWindow(url);
    }

    async waitTillPageLoads(timeout: number = TIME_OUT.xxxl) {
        await browser.setTimeout({ 'pageLoad': timeout });
    }

    async switchToIframeById(id: string) {
        await browser.pause(15000);
        let currentFrame;
        let currentFrameId;
        const iframes = await this.findElements('//iframe');
        for (let i = 0; i < iframes.length; i++) {
            currentFrame = iframes[i];
            currentFrameId = await currentFrame.getAttribute('id');
            if (currentFrameId === id) {
                await browser.switchToFrame(currentFrame);
                break;
            }
        }
    }

    async switchToIframeByXpath(elementLocator: string) {
        const element = await this.findElement(elementLocator);
        await browser.switchToFrame(element);
    }

    async switchToParentFrame() {
        await browser.switchToParentFrame();
    }

    async isElementExisting(elementLocator: string) {
        let element = await $(elementLocator);
        let isExisting = await element.isExisting();
        return isExisting
    }
    // async scrollIntoView(elementLocator: string, timeout: number = TIME_OUT.xxl) {
    //     $(elementLocator).scrollIntoView({ timeout })
    // }


    async hoverOverElement(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        const element = await this.findElement(elementLocator, timeout);
        return await element.moveTo();
    }

    async scrollToElement(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        const element = await this.findElement(elementLocator, timeout);
        return await element.scrollIntoView();
    }

    async doubleClick(elementLocator: string, timeout: number = TIME_OUT.xxl) {
        const element = await this.findElement(elementLocator, timeout);
        return await element.doubleClick();
    }

}