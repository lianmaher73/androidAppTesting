import iosHome from "../pageobjects/iosHome";

describe('Test ios Apps ', () => {
    before( async () => {
        console.log("before")
    })
    beforeEach(async () => {
        console.log("beforeEach")
    })
    after(async ()=>{
        console.log("after")
    })
    afterEach(async ()=>{
        console.log("afterEach")
    })

    it('find element by "accessibility id & xpath + insert a text ', async () => {
        await iosHome.textField.click();
        await iosHome.txt1.click()
        await iosHome.txt1.setValue('hello');
        await expect(iosHome.txt1).toHaveText('hello');
        // await expect(iosHome.txt1).toHaveText('failure');

    });

    it('find element by class chain ,predicate string & make some scrolling  ', async () => {
        await browser.back();
        // await browser.execute("mobile: scroll", {direction: "down"});
        await browser.execute('mobile: scroll', {direction: 'down', name: 'Web View'})// or whatever label the target element has})
        await iosHome.webviweBtn.click()
        await browser.back();
        await browser.execute("mobile: scroll", {direction: "up"});
        // await browser.execute('mobile: scroll', {direction: 'up', name: 'Alert Views'});
        await iosHome.alertViews.click()


    });
    it('exercise ', async () => {
        await browser.back()
        await iosHome.search.click()
        await iosHome.defaultSearch.click()
        await iosHome.searchBar.setValue('hello')
        await expect (iosHome.searchBar).toHaveAttr('value', 'hello')
        await iosHome.clearText.click()
        await expect (iosHome.searchBar).toHaveText('')
        await browser.back()

    });
    it('handel with alert ', async () => {
        await browser.back()
        await iosHome.alertViews.click()
        await iosHome.okCancelAlert.click()
        await browser.acceptAlert()
        await iosHome.okCancelAlert.click()
        console.log( "*****************"+await browser.getAlertText())
        await browser.dismissAlert()
        await browser.back()

    });
    it('choose vlues from picker view ', async () => {
        await browser.back()
        await iosHome.pickerView.click()
        await iosHome.redSet.addValue("150")
        await iosHome.greenSet.addValue("0")
        await iosHome.blueSet.addValue("150")
    });

});
