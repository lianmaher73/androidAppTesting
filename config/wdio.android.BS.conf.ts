import { config as sharedConfig } from './wdio.shared.conf';
import 'dotenv/config';
//export const config: WebdriverIO.Config ={
 export const config = {
	...sharedConfig,
	capabilities: [{
		platformName: 'android',
		'appium:platformVersion': '12.0',
		'appium:deviceName': 'Google Pixel 6',
		'appium:app': 'bs://5df2e7ffdac4250d2eb25996ef67302026b0a332',
		'appium:automationName': 'UiAutomator2'
	}],
	specs: ['../test/specs/*android*.ts'],
	services: ['browserstack'],
	 user:process.env.BS_USER,
	 key:process.env.BS_KEY,


}

