import { config as sharedConfig } from './wdio.shared.conf';
import { join } from 'path';
//export const config: WebdriverIO.Config ={
 export const config = {
	...sharedConfig,
	capabilities: [{
		platformName: 'Android',
		'appium:platformVersion': '11',
		'appium:deviceName': 'android_11',
		'appium:app': join(process.cwd(), 'androidApps/ApiDemos-debug.apk'),
		'appium:automationName': 'UiAutomator2',
	}],
	specs: ['../test/specs/*android*.ts'],
	 port: 4723,

}

