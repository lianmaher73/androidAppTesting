// import type { Options } from '@wdio/types';
// export const config :Options.Testrunner= {

export const config = {
	runner: 'local',
	specs: ['../test/specs/**/*.ts'],
	exclude: [],
	maxInstances: 1,
	logLevel: 'info',
	bail: 0,
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	services: ['appium'],
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000,
	},
	tsConfigPath: './tsconfig.json'
};
