import { config as sharedConfig } from './wdio.shared.conf';
import { join } from 'path';
//export const config: WebdriverIO.Config ={
export const config = {
	...sharedConfig,
	capabilities: [{
		platformName: 'iOS',
		'appium:platformVersion': '18.5',
		'appium:deviceName': 'iPhone 16',
		'appium:app': join(process.cwd(), 'iosApps/UIKitCatalog.app'),
		'appium:automationName': 'XCUITest',
	}],
	specs: ['../test/specs/*ios*.ts'],
	services: ['browserstack'],
	user:'lianmaher_PQj0W2',
};
