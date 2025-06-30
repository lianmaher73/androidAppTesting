import Home from '../pageobjects/androidHome.ts';
describe('Test android App', () => {
    it('find element by "accessibility id"', async () => {
        await Home.accessibility_id.click()
        await expect(Home.accessibility_id_check).toHaveText("Accessibility Node Provider")
        // await expect (Home.accessibility_id_check).toHaveText("failure")
    });

    it('find element by "Class"', async () => {
        await browser.startActivity(Home.Home_package, Home.Home_activity)
        await Home.class.click()
        await expect(Home.class_check).toHaveText("API Demos")
        // await expect (Home.class_check).toHaveText("failure")
    });

    it('find element by "xpath"', async () => {
        await browser.startActivity(Home.Home_package, Home.Home_activity)
        await Home.app_xpath.click()
        await Home.alert_xpath.click()
        await Home.list_xpath.click()
        await Home.comm3_xpath.click()
        await expect(Home.xpath_check).toHaveText("You selected: 2 , Command three")
        // await expect (Home.class_check).toHaveText("failure")
    });
    it('find elements by UIAutomator', async () => {
        await browser.startActivity(Home.Home_package, Home.Home_activity)
        await Home.UIAutomator.click();
        await Home.UIAutomotor2.click();
    })

    it('try to add text into text field', async () => {
        await browser.startActivity(Home.Home_package, Home.Home_activity)
        await Home.viewsBtn.click();
        await Home.autoCompBtn.click()
        await Home.screenTop.click()
        await Home.textField.setValue('japan')
        await expect(Home.textField).toHaveText('japan')
        // await expect (Home.textField).toHaveText('failure')
    })
    it('navigate to any page that i want using package,activity ', async () => {
        await browser.startActivity(Home.view_button_package, Home.view_button_activity)
        await Home.packageActivityCheck.click()
    })

    it('How to work with the alert box ', async () => {
        // i also can click on the ok , cancel button
        await browser.startActivity(Home.Home_package, Home.Home_activity)
        await Home.app_xpath.click()
        await Home.alert_xpath.click()
        await Home.okCancelAertDialog.click()
        console.log("the text in the alert box ->" + await browser.getAlertText())
        await browser.acceptAlert()
        await Home.okCancelAertDialog.click()
        await browser.dismissAlert()
    })

    it('vertical scrolling using scrollToEnd/scrollToBeginning  ', async () => {
        await browser.startActivity(Home.Home_package, Home.Home_activity)
        await Home.viewsBtn.click();
        await Home.scrollToEnd;
        await Home.webview.click();
        await browser.back();
        await Home.scrollToBeginning;
        await Home.autoCompBtn.click();
    });
    it('vertical scrolling using scrollTextIntoView "its more stable" ', async () => {
        await browser.startActivity(Home.Home_package, Home.Home_activity)
        await Home.viewsBtn.click();
        await Home.UiscrollTextIntoView("WebView").click()
        await browser.back();
        await Home.UiscrollTextIntoView("Auto Complete").click()
    });
    it('horizontal scrolling using scrollForward/ scrollBackward', async () => {
        await browser.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")
        await Home.scrollForward
        await Home.scrollBackward
    });

    it('scrolling assignment ', async () => {
        // Access the Date Widget View -> Date Widgets -> Dialog
        // Get the current date
        // Click on "change the date"
        // Scroll horizontally to the right
        // Pick the 10th date from the month
        // Click OK button
        // Assert the date is updated
        await browser.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")
        await Home.change_date.click()
        await Home.scrollForward
        await Home.date_picker.click()
        await Home.ok_btn.click()
        // await expect(Home.dateCheck).toHaveText("7-10-2025")
         expect(await (Home.dateCheck).getText()).toContain("7-10-2025")

    });

})