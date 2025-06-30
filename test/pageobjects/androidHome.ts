class androidHome {
    public get accessibility_id() {
        return $("~Accessibility")
    }

    public get accessibility_id_check() {
        return $("~Accessibility Node Provider")
    }

//-------------------------------------------------------------------------------------
    public get class() {
        return $("android.widget.TextView")
    }

    public get class_check() {
        return $("android.widget.TextView")
    }

//-------------------------------------------------------------------------------------

    public get app_xpath() {
        return $('//android.widget.TextView[@content-desc="App"]')
    }

    public get alert_xpath() {
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
    }

    public get list_xpath() {
        return $('//android.widget.Button[@content-desc="List dialog"]')
    }

    public get comm3_xpath() {
        return $('//android.widget.TextView[@text="Command three"]')
    }

    public get xpath_check() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }

//-------------------------------------------------------------------------------------
    public get UIAutomator() {
        return $('android=new UiSelector().text("Text")')
    }

    public get UIAutomotor2() {
        return $('android= new UiSelector().text("KeyEventText")')
    }

//-------------------------------------------------------------------------------------
    public get viewsBtn() {
        return $('~Views')
    }

    public get autoCompBtn() {
        return $('~Auto Complete')
    }

    public get screenTop() {
        return $('~1. Screen Top')
    }

    public get textField() {
        return $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    }

//-------------------------------------------------------------------------------------
    public get view_button_package() {
        return "io.appium.android.apis"
    }

    public get view_button_activity() {
        return ".view.Buttons1"
    }
    public get Home_activity() {
        return ".ApiDemos"
    }
    public get Home_package() {
        return "io.appium.android.apis"
    }

    public get packageActivityCheck() {
        return $('~Normal')
    }

//-------------------------------------------------------------------------------------
    public get okCancelAertDialog() {
        return $('~OK Cancel dialog with a message')
    }


//-------------------------------------------------------------------------------------
    public get webview() {
        return $('~WebView')
    }

    public get scrollToEnd() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(5,100)')
    }

    public get scrollToBeginning(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,5)')
    }
//-------------------------------------------------------------------------------------
    public UiscrollTextIntoView(text :string ){
        return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`);
    }
//-------------------------------------------------------------------------------------
    public get  scrollForward() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    }
    public get  scrollBackward() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
    }
//-------------------------------------------------------------------------------------
   public get change_date(){
        return $('~change the date')
   }
   public get date_picker(){
        return $('android=new UiSelector().text("10")')
   }
   public get ok_btn(){
        return $('android=new UiSelector().resourceId("android:id/button1")')
   }
   public get dateCheck(){
        return $('android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")')
   }


}

export default new androidHome()
